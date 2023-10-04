import React from 'react';
import Treatment from '../Treatment/Treatment';

const Asthetic = () => {
    const treatment=['Dental medecine','Dermatology & Cosmetology'];

    return (
        <div  className="grid grid-cols-1 gap-3 w-5/6 mx-auto mt-10 w-2/6">
            {
            treatment.map(name=>
                <Treatment name={name}/>)
            }
        </div>
    );
};

export default Asthetic;