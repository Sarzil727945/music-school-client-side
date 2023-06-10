import React from 'react';
import useTitle from '../../hooks/useTitle';
import Slider from './Slider/Slider';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Service from './Service/Service';

const Home = () => {
     useTitle('Home')
     return (
          <div className=' my-5 py-5'>
               <Slider></Slider>
               <PopularInstructors></PopularInstructors>
               <Service></Service>
          </div>
     );
};

export default Home;