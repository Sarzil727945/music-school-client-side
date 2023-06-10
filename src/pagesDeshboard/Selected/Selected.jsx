import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Selected = () => {
     useTitle('Selected Class')
     const { user } = useContext(AuthContext)
     const [isLoading, setIsLoading] = useState(true);
     const [selectedClass, setSelectedClass] = useState([]);
   


     // server data get start 
     const url = `http://localhost:5000/selected?email=${user?.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setSelectedClass(data);
                    setIsLoading(false);
               })
     }, [url]);
     // server data get exit
 console.log(selectedClass);
     return (
          <div>

               <div>

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

export default Selected;