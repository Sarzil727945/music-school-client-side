import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const MyClasses = () => {
     useTitle('MyClasses')
     const { user } = useContext(AuthContext);
     const [isLoading, setIsLoading] = useState(true);
     const [classData, setClassData] = useState([]);
     const navigate = useNavigate()

     // server data get start 
     const url = `https://assignment12-server-site.vercel.app/class?email=${user?.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setClassData(data);
                    setIsLoading(false);
               })
     }, [url]);
     // server data get exit
     return (
          <div className='container mt-3'>
               <section>
                    <div className='table-responsive'>
                         <table className="table text-center table-striped">
                              <thead className='table-light'>
                                   <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">CLASS NAME</th>
                                        <th scope="col">PICTURE</th>
                                        <th scope="col">SEATS</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">STATUS</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {
                                        classData.map((data, index) => <tr key={data._id}>
                                             <td scope="row"><span>{index + 1}</span></td>
                                             <td ><span>{data.name}</span></td>
                                             <td><img className='myImg' src={data.photoURL} alt="" /></td>
                                             <td><span>{data.seats}</span></td>
                                             <td><span>${data.price}</span></td>
                                             <td className=' fw-bold'>
                                                  {
                                                     data.status ?<>
                                                     {
                                                       data.status === 'approved'?<span className=' text-success'>
                                                            {data.status}
                                                       </span>:<span className=' text-danger'>
                                                            {data.status}
                                                       </span>
                                                     }
                                                     </>:<>
                                                     <span className=' text-warning'>padding..</span>
                                                     </>  
                                                  }
                                             </td>
                                        </tr>
                                        )
                                   }
                              </tbody>
                         </table>
                    </div>
                    {
                         isLoading && <div className="text-center my-5">
                              <div className="spinner-border" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                         </div>
                    }
               </section>
          </div>
     );
};

export default MyClasses;