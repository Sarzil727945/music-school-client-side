import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import Header from '../shared/Header/Header';
import useAdmin from '../hooks/useAdmin';
import useInstructors from '../hooks/useInstructors';
import Footer from '../shared/Footer/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';
import { FaUsers } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import { BiSelectMultiple } from 'react-icons/bi';
import { AiFillFolderAdd } from 'react-icons/ai';
import { GiRolledCloth } from 'react-icons/gi';

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
                         <div className="col-lg-2 bg-light py-5">
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
                                             (!isAdmin && !isInstructors) && <h5>(Student)</h5>

                                        }
                                   </div>
                              </div>
                              <hr />
                              <div className=' ps-3 mt-2'>
                                   {
                                        (isAdmin || isInstructors) ? <>
                                             {
                                                  isInstructors && <>
                                                       <div>
                                                            <ActiveLink to='/dashboard/addClass'><span className='fs-4 me-1'><AiFillFolderAdd/></span>Add Class</ActiveLink>
                                                       </div>
                                                       <div>
                                                            <ActiveLink to='/dashboard/myClasses'> <span className=' fs-4 me-1'><MdClass/></span>My Classes</ActiveLink>
                                                       </div>
                                                  </>
                                             }
                                             {
                                                  isAdmin && <div>
                                                       <ActiveLink to='/dashboard/manageClasses'><span className=' fs-4 me-1'><BsDatabaseFillAdd/></span> Manage Classes</ActiveLink>
                                                  </div>
                                             }
                                             {
                                                  isAdmin && <div>
                                                       <ActiveLink to='/dashboard/manageUsers'> <span className=' fs-4 me-1'><FaUsers/></span> Manage Users</ActiveLink>
                                                  </div>
                                             }
                                        </> : <>
                                             <div>
                                                  <ActiveLink to='/dashboard/selected'><span className=' fs-4 me-1'><BiSelectMultiple></BiSelectMultiple></span>Selected Class</ActiveLink>
                                             </div>

                                             <div>
                                                  <ActiveLink to='/dashboard/enrolledClass'><span className=' fs-4 me-1'><GiRolledCloth/></span>Enrolled Class</ActiveLink>
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