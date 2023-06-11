import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [bestClass, setBestClass] = useState([]);
     useEffect(() => {
          fetch('https://assignment12-server-site.vercel.app/class')
               .then(res => res.json())
               .then(data => {
                    const approvedClasses = data.filter(data => data?.status === "approved")
                    setBestClass(approvedClasses);
                    setIsLoading(false);
               })
     }, [])
     const sixClass = bestClass.slice(0, 6)

     return (
          <div className='my-5 container'>
               <h1 className=' text-center'>Popular Classes</h1>
               <div>
                    <div className="row my-4  no-gutter">
                         {
                              sixClass.map(data => <div key={data._id} className="col-lg-4 mb-3 ">
                                   <img src={data.photoURL} alt="" className=' img-fluid rounded w-100  galleryImg' />
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

export default PopularClasses;