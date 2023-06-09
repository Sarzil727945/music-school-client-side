import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import Swal from 'sweetalert2';

const AdminRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const [isAdmin, isAdminLoading] = useAdmin();
     const location = useLocation()
     if (!isAdmin) {
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
     else if (loading || isAdminLoading) {
          return (<div className='mt-5 pt-5'>
               <div className="text-center mt-5 pt-5">
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
               </div>
          </div>
          </div>
          )
     }
    else if (isAdmin) {
          return children
     }
     return (
          <div>
               <Navigate to='/' state={{from:location}} replace></Navigate>
          </div>
     );
};

export default AdminRoute;