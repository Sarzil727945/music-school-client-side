import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import Header from '../shared/Header/Header';
import useAdmin from '../hooks/useAdmin';
import useInstructors from '../hooks/useInstructors';
import Footer from '../shared/Footer/Footer';

const Dashboard = () => {
     // TODO 
     // const isAdmin = true
     const [isAdmin] = useAdmin();
     const [isInstructors] = useInstructors();
     return (
          <div className='  mt-5'>
               <div className=' mt-5 pt-5 '>
                    <div className='row '>
                         <div className="col-lg-3 bg-light p-3 text-center">
                              {
                                   (isAdmin || isInstructors ) ? <>

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
                                        <hr />
                                   </> : <>

                                        <div>
                                             <ActiveLink to='/dashboard/allClass'>All Class</ActiveLink>
                                        </div>
                                        <div>
                                             <ActiveLink to='/dashboard/selectedClass'>Selected Class</ActiveLink>
                                        </div>
                                        <hr />
                                   </>
                              }
                         </div>
                         <div className="col-lg-9">
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