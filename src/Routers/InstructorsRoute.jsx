import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructors from '../hooks/useInstructors';

const InstructorsRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const [isInstructors, isInstructorsLoading] = useInstructors();
     const location = useLocation()
     if (loading || isInstructorsLoading) {
          return (<div className='mt-5 pt-5'>
               <div className="text-center mt-5 pt-5">
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
               </div>
          </div>
          </div>
          )
     }
    else if (user && isInstructors) {
          return children
     }
     return (
          <div>
               <Navigate to='/' state={{from:location}} replace></Navigate>
          </div>
     );
};

export default InstructorsRoute;