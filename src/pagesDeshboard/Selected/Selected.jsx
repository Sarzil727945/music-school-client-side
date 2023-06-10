import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Button, Card } from 'react-bootstrap';

const Selected = () => {
     useTitle('Selected Class')
     const { user } = useContext(AuthContext)
     const [isLoading, setIsLoading] = useState(true);
     const [selectedClass, setSelectedClass] = useState([]);



     // server data get start 
     const url = `http://localhost:5000/selected?email=${user?.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setSelectedClass(data);
                    setIsLoading(false);
               })
     }, [url]);
     // server data get exit
     console.log(selectedClass);
     return (
          <div className=' container'>

               <div>
                    {
                         selectedClass.map((data) => <div key={data._id}>
                              <div className="card mb-3 w-75 mx-auto">
                                   <div className="row g-0">
                                        <div className="col-md-4">
                                             <img src={data.photoURL} className="img-fluid rounded-start" alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                             <div className="card-body">
                                                  <h5 className="card-title">Card title</h5>
                                                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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