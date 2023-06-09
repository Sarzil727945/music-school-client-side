import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SubClasses.css'

const SubClasses = ({ data }) => {
     const { photoURL, name, displayName, seats, price } = data;
     console.log(data);
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
                                   <Button variant="success">
                                        {/* <Link className='text-decoration-none' to={`/viewRecipes/${recipesNumber}`}>{btn1} </Link> */}
                                        Selected
                                   </Button>
                              </div>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default SubClasses;