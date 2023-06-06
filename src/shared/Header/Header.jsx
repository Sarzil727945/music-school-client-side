import React, { useContext } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.jpg'
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
     const { user, logOut } = useContext(AuthContext)
     const navigate = useNavigate();

     // logOut part start
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }
     // logOut part end

     return (
          <div className='fixed-top'>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4 d-flex align-items-center'>
                              <img className='logoStyle' src={logo} alt="" />
                              <h2 className='ms-3'>Arts&Crafts</h2>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0 fw-semibold"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>

                                   <ActiveLink to="/allToys">AllToys</ActiveLink>
                                   {
                                        (user?.email) &&
                                        <ActiveLink to="/myToys">MyToys</ActiveLink>
                                   }
                                   {
                                        (user?.email) &&
                                        <ActiveLink to="/addToy">AddToy</ActiveLink>
                                   }
                                   <ActiveLink to="/blog">Blog</ActiveLink>

                              </Nav>
                              <Form className=' d-flex '>
                                   {
                                        user ? <div>
                                             <img title={user.displayName} className='imgStyle me-3' src={user.photoURL} alt="" />
                                             <Button onClick={handelLogOut} variant="info" className='py-2'>Log Out</Button>
                                        </div> : <ActiveLink to="/login">Login</ActiveLink>
                                   }
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;