import React from 'react';
import './Service.css'
import smImg from '../../../assets/sm.jpg'
import smrImg from '../../../assets/smr.jpg'

const Service = () => {
     return (
          <div className=' mt-lg-4 pt-3 container'>
               <h1 className=' text-center'> Awesome Service!</h1>
               <div className="row">
                    <div className="col-lg-6">
                         <div className=' row d-flex align-items-center mt-5'>
                              <div className='  col-lg-6 aos-init aos-animate' data-aos="fade-down"
                              data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img className='adminImg img-fluid rounded' src={smrImg} alt="" />
                              </div>
                              <div className=' col-lg-6'>
                                   <h2 className=' mt-4'>Admin This Website</h2>
                                   <p>My purpose is to assist and provide useful and relevant responses based on the input I receive. If you have any specific questions or need assistance with anything, feel free to ask! I am here to assist and provide information on a wide range of topics to the best of my knowledge and abilities. </p>
                                   <h3 className='mt-2'>Beseie Cooper</h3>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6">
                    <div className=' row d-flex align-items-center mt-5'>
                              <div className='  col-lg-6 aos-init aos-animate' data-aos="fade-up"
                              data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img className=' adminImg img-fluid rounded' src={smImg} alt="" />
                              </div>
                              <div className=' col-lg-6'>
                                   <h2 className=' mt-4'>Admin This Website</h2>
                                   <p>My purpose is to assist and provide useful and relevant responses based on the input I receive. If you have any specific questions or need assistance with anything, feel free to ask! I am here to assist and provide information on a wide range of topics to the best of my knowledge and abilities. </p>
                                   <h3 className='mt-2'>Beseie Cooper</h3>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Service;