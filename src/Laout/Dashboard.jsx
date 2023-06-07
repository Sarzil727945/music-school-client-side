import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
     // TODO 
     // const isAdmin = true
     const [isAdmin] = useAdmin();
     return (
          <div className='  mt-5'>
               <div className=' mt-5 pt-5 '>
                    <div className='row '>
                         <div className="col-lg-3 bg-light p-3 text-center">
                              {
                                   isAdmin ? <>

                                        <div>
                                             <ActiveLink to='/dashboard/allClass'>All Class</ActiveLink>
                                        </div>
                                        <div>
                                             <ActiveLink to='/dashboard/selectedClass'>Selected Class</ActiveLink>
                                        </div>
                                        <div>
                                             <ActiveLink to='/dashboard/allUsers'>All Users</ActiveLink>
                                        </div>
                                        <hr />
                                   </> : <>

                                        <div>
                                             <ActiveLink to='/dashboard/allClass'>All Class</ActiveLink>
                                        </div>
                                        <div>
                                             <ActiveLink to='/dashboard/selectedClass'>Selected Class</ActiveLink>
                                        </div>
                                        {/* <div>
                                             <ActiveLink to='/dashboard/allUsers'>All Users</ActiveLink>
                                        </div> */}
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
               <div className=' bg-light'>
                    <div className="container fixed-bottom ">
                         <p className="text-left py-4">
                              &copy; Sarzil Muntaha @ <span className="text-info">Azmira Akhtar</span>
                              <span className="text-info float-end">
                                   Back to top
                              </span>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;