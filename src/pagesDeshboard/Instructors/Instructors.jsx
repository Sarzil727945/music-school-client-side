import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Card } from 'react-bootstrap';

const Instructors = () => {
     useTitle('Instructors')
     const [isLoading, setIsLoading] = useState(true);
     const [instructors, setInstructors] = useState([]);
     useEffect(() => {
          fetch('http://localhost:5000/users')
               .then(res => res.json())
               .then(data => {
                    const allUsers = data.filter(data => data.role === "Instructors")
                    setInstructors(allUsers);
                    setIsLoading(false);
               })
     }, [])
     return (
          <div className=' container mt-5 pt-5'>
               <div className='row'>
                    {
                         instructors.map((data) => <div key={data._id} className=' col-lg-4 mb-3'>
                              <div>
                                   <Card className=' text-center'>
                                        <Card.Body>
                                             <img className=' w-100 rounded imageStyle' src={data.img} alt="" />
                                             <h3 className='mt-4'>Name: {data.name}</h3>
                                             <h4>Email: {data.email}</h4>
                                        </Card.Body>
                                   </Card>
                              </div>
                         </div>)
                    }
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

export default Instructors;