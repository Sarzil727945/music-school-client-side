import React from 'react';
import useTitle from '../../hooks/useTitle';
import useAxiosSecure from '../../hooks/useAxiouSeoure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import {FaUserShield, FaTrashAlt} from 'react-icons/fa'

const AllUsers = () => {
     useTitle('AllUsers')
     const [axiosSecure] = useAxiosSecure();

     const { data: users = [], refetch } = useQuery(['users'],async () => {
          const res = await axiosSecure.get('/users')
          return res.data;
     })

     // admin part start
     const handelMakeAdmin = (user) => {
          fetch(`http://localhost:5000/users/admin/${user._id}`, {
               method: 'PATCH'
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         refetch()
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: `${user.name} is an admin now`,
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               })
     }
     // admin part end

     // card data delete start
     const handelDelete = (user) => {

     }
     // card data delete end

     return (
          <div className=' container mt-3'>
               <section>
                    <div className='table-responsive'>
                         <table className="table text-center table-striped">
                              <thead className='table-light'>
                                   <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">INSTRUCTOR ROLE</th>
                                        <th scope="col">ADMIN ROLE</th>
                                        <th scope="col">DELETE</th>
                                   </tr>
                              </thead>

                              <tbody>
                              {
                                   users.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>INSTRUCTOR</td>
                                        <td>
                                             {
                                                  user.role === 'admin'? 'admin' : <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost btn-md bg-orange-500 text-white"><FaUserShield></FaUserShield></button>
                                                  
                                             }
                                        </td>
                                        <td>
                                             <button onClick={() => handelDelete(user)} className="btn btn-ghost btn-md bg-red-600 text-white"><FaTrashAlt /></button>
                                        </td>
                                   </tr>)
                              }
                              </tbody>
                         </table>
                    </div>
                    {/* {
                         isLoading && <div className="text-center my-5">
                              <div className="spinner-border" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                         </div>
                    } */}

               </section>
          </div>
     );
};

export default AllUsers;