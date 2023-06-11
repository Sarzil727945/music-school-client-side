import React, { useContext } from 'react';
import './AddClass.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiouSeoure';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
     useTitle('AddClass')
     const navigate = useNavigate();
     const { user } = useContext(AuthContext)
     const displayName = user?.displayName;
     const email = user?.email;
     const status = "pending";
     const [axiosSecure] = useAxiosSecure();
     const { register, handleSubmit, reset } = useForm();

     const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

     const onSubmit = (data) => {

          const formData = new FormData();
          formData.append('image', data.image[0])

          fetch(img_hosting_url, {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(imgResponse => {
                    if (imgResponse.success) {
                         const imgURL = imgResponse?.data?.url;
                         const { name, price, seats, description } = data;
                         const newItem = { name, price: parseFloat(price), seats, description, photoURL: imgURL, displayName, email, status }
                         axiosSecure.post('/class', newItem)
                              .then(data => {
                                   if (data.data.insertedId) {
                                        reset();
                                        Swal.fire({
                                             position: 'top-end',
                                             icon: 'success',
                                             title: 'Class added successfully',
                                             showConfirmButton: false,
                                             timer: 1500
                                        })
                                   }
                                   navigate('/dashboard/myClasses')
                              })
                    }
               })

     };

return (
     <div className=' container '>
          <div className=' my-4'>
               <h1 className='text-center'>Add Class</h1>
          </div>
          <div className='checkoutForm rounded'>
               <form className='p-lg-5 mx-lg-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="row px-4 pt-4">
                         <div className="col-lg mb-2">
                              <input type="text" className="form-control py-2"
                                   {...register("name", { required: true, maxLength: 120 })}
                                   placeholder="Name" aria-label="name" required />
                         </div>
                         <div className="col-lg">
                              <input type="file"
                                   {...register("image", { required: true, })}
                                   className="form-control py-2" placeholder="Picture URL" aria-label="Picture URL" required />
                         </div>
                    </div>
                    <div className="row px-4 py-4">
                         <div className="col-lg mb-2">
                              <input type="number"
                                   {...register("price", { required: true, maxLength: 120 })}
                                   className="form-control py-2" placeholder="Price" aria-label="Price" required />
                         </div>
                         <div className="col-lg mb-2">
                              <input type="number"
                                   {...register("seats", { required: true, maxLength: 120 })}
                                   className="form-control py-2" placeholder="Available seats" aria-label="seats" required />
                         </div>
                    </div>
                    <div className="mb-3 px-4 pb-3">
                         <textarea
                              {...register("description", { required: true, maxLength: 120 })}
                              className="form-control py-2" id="validationTextarea" placeholder="Detail description" required rows="5"></textarea>
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