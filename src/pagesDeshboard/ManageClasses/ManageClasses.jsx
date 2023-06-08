import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import SubManageClasses from './SubManageClasses/SubManageClasses';
import useTitle from '../../hooks/useTitle';

const ManageClasses = () => {
     useTitle('MyToys')

     const [isLoading, setIsLoading] = useState(true);
     const [classesData, setClassesData] = useState([]);
     const navigate = useNavigate()

     useEffect(() => {
          fetch('http://localhost:5000/class')
               .then(res => res.json())
               .then(data => {
                    setClassesData(data);
                    setIsLoading(false);
               })
     }, [])

     return (
          <div className='container mt-3'>
               <section>
                    <div className='table-responsive'>
                         <table className="table text-center table-striped">
                              <thead className='table-light'>
                                   <tr>
                                        <th scope="col">INST NAME</th>
                                        <th scope="col">INST EMAIL</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">PICTURE</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">SEATS</th>
                                        <th scope="col">APPROVE</th>
                                        <th scope="col">DENY</th>
                                        <th scope="col">FEEDBACK</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {
                                       classesData.map(data => <SubManageClasses
                                             key={data._id}
                                             data={data}
                                        ></SubManageClasses>)
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

export default ManageClasses;