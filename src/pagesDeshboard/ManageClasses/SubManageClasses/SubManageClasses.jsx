import React from 'react';
import { Link } from 'react-router-dom';
import './SubManageClasses.css'


const SubManageClasses = ({ data }) => {
     const { _id, displayName, email, name, photoURL, price, seats  } = data;
     return (
          <tr>
               <td scope="row"><span>{displayName}</span></td>
               <td><span>{email}</span></td>
               <td><span>{name}</span></td>
               <td><img className='myImg' src={photoURL} alt="" /></td>
               <td><span>${price}</span></td>
               <td><span>{seats}</span></td>
               <td>
                    <button type="button" className="btn btn-success me-3">APPROVE</button>
               </td>
               <td>
                    <button type="button" className="btn btn-danger">DENY</button>
               </td>
               <td>
                    <button type="button" className="btn btn-danger">FEEDBACK</button>
               </td>
          </tr>
     );
};

export default SubManageClasses;