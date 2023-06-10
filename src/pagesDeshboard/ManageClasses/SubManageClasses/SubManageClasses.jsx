import React from 'react';
import { Link } from 'react-router-dom';
import './SubManageClasses.css'


const SubManageClasses = ({ data, index, handelStatusApproved, handelStatusDenied }) => {
     const { _id, displayName, email, name, photoURL, price, seats, status  } = data;
     return (
          <tr>
               <td scope="row"><span>{index + 1}</span></td>
               <td ><span>{displayName}</span></td>
               <td><span>{email}</span></td>
               <td><span>{name}</span></td>
               <td><img className='myImg' src={photoURL} alt="" /></td>
               <td><span>${price}</span></td>
               <td><span>{seats}</span></td>
               <td>
                   {
                    status === 'approved' ? <span>approved</span> : <button type="button" className="btn btn-success" onClick={()=> handelStatusApproved(_id)}>APPROVED</button>
                   }
               </td>
               <td>
               {
                    status === 'denied' ? <span>denied</span> : <button type="button" className="btn btn-danger" onClick={()=> handelStatusDenied(_id)}>DENIED</button>
                   }
               </td>
          </tr>
     );
};

export default SubManageClasses;