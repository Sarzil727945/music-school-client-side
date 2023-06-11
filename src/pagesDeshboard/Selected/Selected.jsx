import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Selected.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Selected = () => {
     useTitle('Selected Class')
     const { user } = useContext(AuthContext)
     const [isLoading, setIsLoading] = useState(true);
     const [selectedClass, setSelectedClass] = useState([]);

     // server selected data get start 
     const url = `https://assignment12-server-site.vercel.app/selected?email=${user?.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setSelectedClass(data);
                    setIsLoading(false);
               })
     }, [url]);
     // server selected data get exit
console.log(selectedClass);
     // server selected data delete start
     const handelDelete = (id) => {
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://assignment12-server-site.vercel.app/selected/${id}`, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   Swal.fire(
                                        'Deleted!',
                                        'Your Selected Class has been deleted.',
                                        'success'
                                   )
                                   const remaining = selectedClass.filter(booking => booking._id !== id)
                                   setSelectedClass(remaining);
                              }
                         })
               }
          })
     }
     // server selected data delete end
     
     return (
          <div className=' container mt-3'>

               <div>
                    {
                         selectedClass.map((data) => <div key={data._id}>
                              <div className="card mb-3 w-75 mx-lg-auto weightStyle">
                                   <div className="row g-0 d-flex align-items-center">
                                        <div className="col-md-5">
                                             <img src={data.photoURL} className="img-fluid rounded-start payImg" alt="..." />
                                        </div>
                                        <div className="col-md-4">
                                             <div className="card-body">
                                                  <h3 className="card-title">{data.name}</h3>
                                                  <p className="card-text">{data.description}</p>
                                                  <div className=' d-flex'>
                                                       <p className="card-text"><small className="text-muted">Price: ${data.price}</small></p>
                                                       <p className="card-text ms-5"><small className="text-muted">Seats: {data.seats}</small></p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='col-md-3'>
                                             <div className=' d-flex py-3 justify-content-center'>
                                                  <div>
                                                       <Link to='/dashboard/payment'>
                                                            <button type="button" className="btn btn-success me-3">Payment</button>
                                                       </Link>
                                                  </div>
                                                  <div>
                                                       <button onClick={() => handelDelete(data._id)} type="button" className="btn btn-danger">Delete</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
               {
                    isLoading && <div className="text-center my-5">
                         <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
               }
          </div>
     );
};

export default Selected;