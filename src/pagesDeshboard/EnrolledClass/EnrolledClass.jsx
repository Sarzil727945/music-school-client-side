import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useParams } from 'react-router-dom';

const EnrolledClass = () => {
     const {tranId} = useParams()
     useTitle('EnrolledClass')
     return (
          <div>
               <h1>Payment Success {tranId}</h1>
          </div>
     );
};

export default EnrolledClass;