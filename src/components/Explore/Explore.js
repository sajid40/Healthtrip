import React from 'react';
import Treatments from './Treatments/Treatments';
import Active from '../Active/Active';


const Explore = () => {

    const treatment=['Cardiac','Onoology','Nephrology','Neuro/Spine','Orthopedic','Dermatology'];
    return (
        <div className="w-5/6 mx-auto">
            <h1 className="text-4xl text-center mt-12"><b>Explore treatments</b> across specialities</h1>

            <div>
              <Active  address='/medical' name="Medical"/>
              <Active address='/asthetic' name="Asthetic"/>
              <Active address='/wellness' name="Wellness"/>
            </div>


          <div className=" ">
          <div className="grid grid-cols-3 gap-3 mt-5">
          {
            treatment.map(name=>
                
                <Treatments Name={name}/>
                )
          }
          </div>
          </div>
        </div>
    );
};

export default Explore;