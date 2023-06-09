import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import Header from '../shared/Header/Header';
import useAdmin from '../hooks/useAdmin';
import useInstructors from '../hooks/useInstructors';
import Footer from '../shared/Footer/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Dashboard = () => {
     useTitle('Dashboard')
     const { user } = useContext(AuthContext)
     // TODO 
     // const isAdmin = true
     const [isAdmin] = useAdmin();
     const [isInstructors] = useInstructors();
     return (
          <div className='  mt-5'>
               <div className=' mt-5 pt-5 '>
                    <div className='row '>
                         <div className="col-lg-2 bg-light py-3">
                              <div className='text-center pt-2'>
                                   <div>
                                        <img className=' imgStyle1' src={user.photoURL} alt="" />
                                        <h4>{user.displayName}</h4>
                                        {
                                             isAdmin && <h5>
                                                  (Admin)
                                             </h5>
                                        }
                                        {
                                             isInstructors && <h5>
                                                  (Instructor)
                                             </h5>
                                        }
                                        {
                                          (!isAdmin && !isInstructors)&&  <h5>(Student)</h5>

                                        }
                                   </div>
                              </div>
                              <hr />
                              <div className=' ps-5 mt-2'>
                                   {
                                        (isAdmin || isInstructors) ? <>

                                             <div>
                                                  <ActiveLink to='/dashboard/allClass'>All Class</ActiveLink>
                                             </div>
                                             <div>
                                                  <ActiveLink to='/dashboard/selectedClass'>Selected Class</ActiveLink>
                                             </div>
                                             <div>
                                                  <ActiveLink to='/dashboard/addClass'>Add Class</ActiveLink>
                                             </div>
                                             <div>
                                                  <ActiveLink to='/dashboard/myClasses'>My Classes</ActiveLink>
                                             </div>
                                             {
                                                  isAdmin && <div>
                                                       <ActiveLink to='/dashboard/manageClasses'>Manage Classes</ActiveLink>
                                                  </div>
                                             }
                                             {
                                                  isAdmin && <div>
                                                       <ActiveLink to='/dashboard/manageUsers'>Manage Users</ActiveLink>
                                                  </div>
                                             }
                                        </> : <>

                                             <div>
                                                  <ActiveLink to='/dashboard/allClass'>All Class</ActiveLink>
                                             </div>
                                             <div>
                                                  <ActiveLink to='/dashboard/selectedClass'>Selected Class</ActiveLink>
                                             </div>
                                        </>
                                   }
                              </div>
                         </div>
                         <div className="col-lg-10">
                              <Outlet></Outlet>

                         </div>
                    </div>
               </div>
               <Header></Header>
               <Footer></Footer>
          </div>
     );
};

export default Dashboard;