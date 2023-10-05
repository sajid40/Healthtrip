import React from 'react';
import Problems from '../Problems/Problems';

const Wellness = () => {
    const treatment=['Anorectal Problems','Cardiology','ENT','Ayurveda','Endocrinology','GI & Bariatric'];

    return (
        <div  className="grid grid-cols-3 gap-3 w-5/6 mx-auto mt-10">
            {
            treatment.map(name=>
                <Problems name={name}/>)
            }
        </div>
    );
};
export default Wellness;