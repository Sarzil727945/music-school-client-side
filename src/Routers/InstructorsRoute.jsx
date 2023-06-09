import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructors from '../hooks/useInstructors';
import Swal from 'sweetalert2';
import useAdmin from '../hooks/useAdmin';

const InstructorsRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const [isAdmin, isAdminLoading] = useAdmin();
     const [isInstructors, isInstructorsLoading] = useInstructors();
     const location = useLocation()
     if (!(isAdmin || isInstructors)) {
          Swal.fire({
               title: 'If you do this  for the second time, a case will be filed against you.!!',
               showClass: {
                 popup: 'animate__animated animate__fadeInDown'
               },
               hideClass: {
                 popup: 'animate__animated animate__fadeOutUp'
               }
             })
     }
     else if (loading || isInstructorsLoading) {
          return (<div className='mt-5 pt-5'>
               <div className="text-center mt-5 pt-5">
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
               </div>
          </div>
          </div>
          )
     }
    else if (isAdmin || isInstructors) {
          return children
     }
     return (
          <div>
               <Navigate to='/' state={{from:location}} replace></Navigate>
          </div>
     );
};

export default InstructorsRoute;