import React from 'react';
import Problems from '../Problems/Problems';

const Medical = () => {
    const treatment=['Cardiac','Onoology','Nephrology','Neuro/Spine','Orthopedic','Dermatology'];

    return (
        <div  className="grid grid-cols-3 gap-3 w-5/6 mx-auto mt-10">
            {
            treatment.map(name=>
                <Problems name={name}/>)
            }
        </div>
    );
};

export default Medical;