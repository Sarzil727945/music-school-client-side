import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const Classes = () => {
     useTitle('Classes')
     const [isLoading, setIsLoading] = useState(true);
     const [approvedData, setApprovedData] = useState([]);
     useEffect(() => {
          fetch('http://localhost:5000/class')
               .then(res => res.json())
               .then(data => {
                    const approvedClasses = data.filter(data => data.status === "approved")
                    setApprovedData(approvedClasses);
                    setIsLoading(false);
               })
     }, [])
     console.log(approvedData);
     return (
          <div className=' mt-5 pt-5'>
             
          </div>
     );
};

export default Classes;