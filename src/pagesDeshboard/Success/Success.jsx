import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import EnrolledClass from '../EnrolledClass/EnrolledClass';

const Success = () => {
     const navigate = useNavigate();
     const { tranId } = useParams();
     if (tranId) {
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Your Payment SuccessFull !!',
               showConfirmButton: false,
               timer: 1500
          })
          navigate('/dashboard/enrolledClass')
     }
     return (
          <div>
               <EnrolledClass></EnrolledClass>
          </div>
     );
};

export default Success;