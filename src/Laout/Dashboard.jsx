import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
     return (
          <div className=' container'>
               <div className='row'>
                    <div className="col-lg-4">
                         <div>
                              <Link to='/dashboard/allClass'>All Class</Link>
                         </div>
                         <div>
                              <Link to='/dashboard/selectedClass'>Selected Class</Link>
                         </div>
                    </div>
                    <div className="col-lg-8">
                         <Outlet></Outlet>
                    </div>
               </div>

          </div>
     );
};

export default Dashboard;