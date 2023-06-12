import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import useAxiosSecure from '../../hooks/useAxiouSeoure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaUserShield, FaTrashAlt } from 'react-icons/fa'

const ManageUsers = () => {
     useTitle('ManageUsers')
     const [axiosSecure] = useAxiosSecure();
     const [isLoading, setIsLoading] = useState(true);

     const { data: users = [], refetch } = useQuery(['users'], async () => {
          const res = await axiosSecure.get('/users')
          setIsLoading(false);
          return res.data;
     })

     // admin part start
     const handelMakeAdmin = (user) => {
          fetch(`https://assignment12-server-site.vercel.app/users/admin/${user?._id}`, {
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

     // Instructors part start
     const handelMakeInstructors = (user) => {
          fetch(`https://assignment12-server-site.vercel.app/users/Instructors/${user?._id}`, {
               method: 'PATCH'
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         refetch()
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: `${user.name} is an Instructors now`,
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               })
     }
     // Instructors part end

     // user delete start
     const handelDelete = (user) => {
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
                    fetch(`https://assignment12-server-site.vercel.app/users/${user?._id}`, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   refetch()
                                   Swal.fire(
                                        'Deleted!',
                                        'User has been deleted.',
                                        'success'
                                   )
                              }
                         })
               }
          })
     }
     // delete end

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
                                             <td>
                                                  {console.log()}
                                                  {
                                                       user.email === 'sarzilmuntaha@gmail.com' ? <>
                                                            <button disabled={true} onClick={() => handelMakeInstructors(user)} className="btn btn-ghost btn-md bg-success text-white"><FaUserShield></FaUserShield></button>
                                                       </> : <>
                                                            {
                                                                 user.role === 'Instructors' ? <span className=' text-primary fw-bold'>Instructors</span> : <button onClick={() => handelMakeInstructors(user)} className="btn btn-ghost btn-md bg-success text-white"><FaUserShield></FaUserShield></button>
                                                            }
                                                       </>
                                                  }

                                             </td>
                                             <td>
                                                  {
                                                       user.role === 'admin' ? <span className=' text-primary fw-bold'>admin</span> : <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost btn-md bg-success text-white"><FaUserShield></FaUserShield></button>

                                                  }
                                             </td>
                                             <td>
                                                  {
                                                       user.email === 'sarzilmuntaha@gmail.com' ? <>
                                                            <button disabled={true} onClick={() => handelDelete(user)} className="btn btn-ghost btn-md bg-danger text-white"><FaTrashAlt /></button>
                                                       </> : <>
                                                            <button onClick={() => handelDelete(user)} className="btn btn-ghost btn-md bg-danger text-white"><FaTrashAlt /></button>
                                                       </>
                                                  }
                                             </td>
                                        </tr>)
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

export default ManageUsers;