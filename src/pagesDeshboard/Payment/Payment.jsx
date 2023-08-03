import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiouSeoure';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Payment = () => {
     const {id} = useParams()
     const { user } = useContext(AuthContext)
     const email = user?.email;
     const [axiosSecure] = useAxiosSecure();
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          data.productId = id;
          data.email = email;
          fetch('https://assignment12-server-site.vercel.app/order', {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(data)
          })
          .then((res)=> res.json())
          .then(result => {
               window.location.replace(result.url)
               console.log(result);
               reset();
          })
     }

     return (
          <div className=' mt-3  mx-lg-5 px-lg-5'>
               <h1 className=' text-center'>Please Provide Payment</h1>
               <div>
                    <form className='p-lg-5 mx-lg-5' onSubmit={handleSubmit(onSubmit)}>
                         <div className="row px-4 pt-4">
                              <div className="col-lg mb-2">
                                   <input type="text" className="form-control py-2"
                                        {...register("name", { required: true, maxLength: 120 })}
                                        placeholder="Your Name" aria-label="name" required />
                              </div>
                              <div className="col-lg mb-2">
                                   <input type="text"
                                        {...register("number", { required: true, maxLength: 120 })}
                                        className="form-control py-2" placeholder="Your Phone Number" aria-label="number" required />
                              </div>

                         </div>
                         <div className="row px-4 py-4">
                              <div className="col-lg mb-2">
                                   <input type="text" className="form-control py-2"
                                        {...register("postCode", { required: true, maxLength: 120 })}
                                        placeholder="Post Code" aria-label="postCode" required />
                              </div>
                              <div className="col-lg">
                                   <div className="mb-2">
                                        <select className="form-select py-2" {...register("category")}name='category' aria-label="Default select example" required>
                                             <option >BDT</option>
                                             <option value="USD">USD</option>
                                             <option value="RMB">RMB</option>
                                             <option value="Euro">Euro</option>
                                        </select>
                                   </div>
                              </div>
                         </div>
                         <div className="mb-3 px-4 pb-3">
                              <textarea
                                   {...register("address", { required: true, maxLength: 120 })}
                                   className="form-control py-2" id="validationTextarea" placeholder="Your Address" required rows="3"></textarea>
                         </div>
                         <div className='px-4'>
                              <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">Pay</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Payment;