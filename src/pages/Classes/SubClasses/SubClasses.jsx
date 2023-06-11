import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SubClasses.css'
import useAdmin from '../../../hooks/useAdmin';
import useInstructors from '../../../hooks/useInstructors';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SubClasses = ({ data }) => {
     const { user } = useContext(AuthContext)
     const email = user?.email;
     const userName = user?.displayName;
     const [isAdmin] = useAdmin();
     const [isInstructors] = useInstructors();
     const { _id, photoURL, name, displayName, seats, price, description } = data;
     const selectData = {
          userName,
          email,
          name,
          photoURL,
          price,
          seats,
          description,
     }
     const handelSelected = (selectData) => {
          //   server data post 
          fetch('https://assignment12-server-site.vercel.app/selected', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(selectData)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Your Selected Success !!',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })
                    }
               })
     }
     return (
          <div className='col-lg-4 mb-4'>
               <div>
                    <Card className=' '>
                         <Card.Body>
                              <img className=' w-100 rounded imageStyle' src={photoURL} alt="" />
                              <h3 className='mt-4'>Name: {name}</h3>
                              <h4>Instructor: {displayName}</h4>
                              <div className=' d-flex justify-content-between'>
                                   <Card.Title >Available Seats: {seats}</Card.Title>
                                   <Card.Title >Price: ${price}</Card.Title>
                              </div>

                              <div className=' text-center mt-4 fw-bold'>
                                   {
                                        (isAdmin || isInstructors) ? <>
                                             <Button variant="success" disabled={true}>
                                                  Selected
                                             </Button>
                                        </> : <>
                                             {
                                                  user ? <>
                                                       <Button onClick={() => handelSelected(selectData)} variant="success">
                                                            <Link className='text-decoration-none text-white' to={`/dashboard/selected`}>Selected</Link>
                                                       </Button>
                                                  </> : <>
                                                       <Button variant="success">
                                                            <Link className='text-decoration-none text-white' to={`/login`}>Selected</Link>
                                                       </Button>
                                                  </>
                                             }
                                        </>
                                   }

                              </div>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default SubClasses;