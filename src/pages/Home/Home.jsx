import React from 'react';
import useTitle from '../../hooks/useTitle';
import Slider from './Slider/Slider';

const Home = () => {
     useTitle('Home')
     return (
          <div className=' my-5 py-5'>
               <Slider></Slider>
          </div>
     );
};

export default Home;