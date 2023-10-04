import React from 'react';
import Active from '../Active/Active';


const Explore = () => {

    return (
        <div className="w-5/6 mx-auto">
            <h1 className="text-4xl text-center mt-12"><b>Explore treatments</b> across specialities</h1>

            <div className="flex justify-center items-center mt-10 text-3xl">
              <Active  address='/medical' name="Medical"/>
              <Active address='/asthetic' name="Asthetic"/>
              <Active address='/wellness' name="Wellness"/>
            </div>

           
        </div>
    );
};

export default Explore;