import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const EnrolledClass = () => {
     useTitle('EnrolledClass')
     const { user } = useContext(AuthContext);
     const [payClass, setPayClass] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     // server data get start 
     const url = `https://assignment12-server-site.vercel.app/order`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    const paySameEmail = data?.filter(f =>
                          (f?.product?.email) === user.email
                         )
                    const payTrue = paySameEmail?.filter(f =>
                          (f.paidStatus) === true
                         )
                    setPayClass(payTrue);
                    setIsLoading(false);
               })
     }, [url]);
     // server data get exit

     console.log(payClass);
     return (
          <div>
               <h1 className=' text-center text-success mb-5'>Paid Success</h1>
               {
                         payClass?.map((data) => <div key={data._id}>
                              <div className="card mb-3 w-75 mx-lg-auto weightStyle">
                                   <div className="row g-0 d-flex align-items-center">
                                        <div className="col-md-5">
                                             <img src={data.product.photoURL} className="img-fluid rounded-start payImg" alt="..." />
                                        </div>
                                        <div className="col-md-4">
                                             <div className="card-body">
                                                  <h3 className="card-title">{data.product.name}</h3>
                                                  <p className="card-text">{data.product.description}</p>
                                                  <div className=' d-flex'>
                                                       <p className="card-text"><small className="text-muted">Price: ${data.product.price}</small></p>
                                                       <p className="card-text ms-5"><small className="text-muted">Seats: {data.product.seats}</small></p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='col-md-3'>
                                             <div className=' d-flex py-3 justify-content-center'>
                                                  <div className=' text-success'>
                                                      <b>Paid</b>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>)
                    }
          </div>
     );
};

export default EnrolledClass;