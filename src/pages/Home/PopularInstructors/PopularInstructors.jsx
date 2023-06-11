import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';


const PopularInstructors = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [instructors, setInstructors] = useState([]);
     useEffect(() => {
          fetch('https://assignment12-server-site.vercel.app/users')
               .then(res => res.json())
               .then(data => {
                    const allUsers = data.filter(data => data.role === "Instructors")
                    setInstructors(allUsers);
                    setIsLoading(false);
               })
     }, [])
     const sixInstructors = instructors.slice(0, 6)

     return (
          <div className='my-5 container'>
               <h1 className=' text-center'>Popular Instructors</h1>
               <div>
                    <div className="row my-4  no-gutter">
                         {
                              sixInstructors.map(data => <div key={data._id} className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                                   data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img src={data.img} alt="" className=' img-fluid rounded w-100  galleryImg' />
                              </div>)
                         }
                    </div>
               </div>

               {
                    isLoading && <div className="text-center my-5">
                         <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
               }
          </div>
     );
};

export default PopularInstructors;