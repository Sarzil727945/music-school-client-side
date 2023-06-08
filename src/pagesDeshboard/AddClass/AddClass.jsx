import React, { useContext } from 'react';
import './AddClass.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AddClass = () => {
     useTitle('AddClass')

     const navigate = useNavigate();
     const { user } = useContext(AuthContext)
     const formHandel = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photoURL = form.photoURL.value;
          const displayName = user?.displayName;
          const email = user?.email;
          const price = form.price.value;
          const seats = form.seats.value;
          const description = form.description.value;

          const add = {
               name,
               photoURL,
               displayName,
               email,
               price,
               seats,
               description,
          }

          // server data post start 
          fetch('http://localhost:5000/class', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(add)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Your Class Add Successful !!',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })
                    }
                    // server data post exit 
                    navigate('/dashboard/myClasses')

               })

          form.reset();

     }

     return (
          <div className=' container '>
               <div className=' my-4'>
                    <h1 className='text-center'>Add Class</h1>
               </div>
               <div className='checkoutForm rounded'>
                    <form className='p-lg-5 mx-lg-5' onSubmit={formHandel}>
                         <div className="row px-4 pt-4">
                              <div className="col-lg mb-2">
                                   <input type="text" name='name' className="form-control py-2" placeholder="Name" aria-label="name" required />
                              </div>
                              <div className="col-lg">
                                   <input type="text" name='photoURL' className="form-control py-2" placeholder="Picture URL" aria-label="Picture URL" required />
                              </div>
                         </div>
                         <div className="row px-4 py-4">
                              <div className="col-lg mb-2">
                                   <input type="number" name='price' className="form-control py-2" placeholder="Price" aria-label="Price" required />
                              </div>
                              <div className="col-lg mb-2">
                                   <input type="number" name='seats' className="form-control py-2" placeholder="Available seats" aria-label="seats" required />
                              </div>
                         </div>
                         <div className="mb-3 px-4 pb-3">
                              <textarea name='description' className="form-control py-2" id="validationTextarea" placeholder="Detail description" required rows="5"></textarea>
                         </div>
                         <div className='px-4'>
                              <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">Added Class</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddClass;