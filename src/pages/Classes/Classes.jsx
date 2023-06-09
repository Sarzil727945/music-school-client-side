import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import SubClasses from './SubClasses/SubClasses';

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
     return (
          <div className=' mt-5 pt-5 container'>
               <div className='row '>
                    {
                         approvedData.map((data, index) => <SubClasses
                              key={data._id}
                              data={data}
                         ></SubClasses>
                         )
                    }
               </div>
          </div>
     );
};

export default Classes;