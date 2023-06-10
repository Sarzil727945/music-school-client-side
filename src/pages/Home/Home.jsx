import React from 'react';
import useTitle from '../../hooks/useTitle';
import Slider from './Slider/Slider';
import PopularInstructors from './PopularInstructors/PopularInstructors';

const Home = () => {
     useTitle('Home')
     return (
          <div className=' my-5 py-5'>
               <Slider></Slider>
               <PopularInstructors></PopularInstructors>
          </div>
     );
};

export default Home;