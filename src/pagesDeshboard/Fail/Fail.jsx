import React from 'react';
import { useParams } from 'react-router-dom';

const Fail = () => {
     const { tranId } = useParams()
     return (
          <div>
               <h1>Payment Fail {tranId}</h1>
          </div>
     );
};

export default Fail;