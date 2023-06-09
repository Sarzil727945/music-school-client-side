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

     const handelStatusApproved = (id)=>{
          fetch(`http://localhost:5000/class/${id}`,{
               method: 'PATCH',
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify({status:"approved"})
          })
          .then(res => res.json())
          .then(data=>{
               if (data.modifiedCount > 0){
                    const remaining=classesData.filter(classes => classes._id !== id)
                    const updated = classesData.find(classes => classes._id === id);
                    updated.status='approved'
                    const newClasses = [updated, ...remaining]
                    setClassesData(newClasses)
               }
          })
     }
     const handelStatusDenied = (id)=>{
          fetch(`http://localhost:5000/class/${id}`,{
               method: 'PATCH',
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify({status:"denied"})
          })
          .then(res => res.json())
          .then(data=>{
               if (data.modifiedCount > 0){
                    const remaining=classesData.filter(classes => classes._id !== id)
                    const updated = classesData.find(classes => classes._id === id);
                    updated.status='denied'
                    const newClasses = [updated, ...remaining]
                    setClassesData(newClasses)
               }
          })
     }
     return (
          <div className='container mt-3'>
               <section>
                    <div className='table-responsive'>
                         <table className="table text-center table-striped">
                              <thead className='table-light'>
                                   <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">INST NAME</th>
                                        <th scope="col">INST EMAIL</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">PICTURE</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">SEATS</th>
                                        <th scope="col">APPROVED</th>
                                        <th scope="col">DENIED</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {
                                       classesData.map((data, index) => <SubManageClasses
                                             key={data._id}
                                             data={data}
                                             index = {index}
                                             handelStatusApproved = {handelStatusApproved}
                                             handelStatusDenied = {handelStatusDenied}
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