import { faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doctors from '../../Images/doctors.jpg'
import React from 'react';

const Call = () => {
    return (
        <div className="flex justify-between items-center p-2 border-2 rounded-2xl mt-5 w-5/6 mx-auto">
            <h2 className="text-3xl"><b>Teleconsult</b> with top surgeons</h2>
            <span className="text-3xl text-blue-500 ">@ $1/miniute   <FontAwesomeIcon icon={faPhone}/>  <FontAwesomeIcon icon={faVideo}/></span>
            <div className="w-1/12">
                <img  src={doctors} alt="" />
            </div>
        </div>
    );
};

export default Call;