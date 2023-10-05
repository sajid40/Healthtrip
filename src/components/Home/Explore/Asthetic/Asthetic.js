import React from 'react';
import Problems from '../Problems/Problems';
const Asthetic = () => {
    const treatment=['Dental medecine','Dermatology & Cosmetology'];

    return (
        <div  className="grid grid-cols-1 gap-3 w-2/6 mx-auto mt-10">
            {
            treatment.map(names=>
                <Problems name={names}/>)
            }
        </div>
        
    );
};

export default Asthetic;