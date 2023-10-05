import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import hand from '../../../Images/hand.jpg';
import leaf from '../../../Images/leaf.jpg';

const Treatmenttypes = () => {
    return (
        <div className="flex justify-between w-5/6 mx-auto mt-10">
            <div className="p-5 mr-3 bg-pink-100 tracking-wide flex justify-between  rounded-3xl items-center mx-auto ">
                <div className=" w-full">

                <h2 className="text-pink-600"><b>AESTHETIC</b> TREATMENTS</h2>

                <h1 className="text-3xl mt-4">
                <b>Best Treatment </b>
                 at  <br /> affordable prices
                </h1>
                <h5 className="  font-thin mt-6">Treatments for Hair Transplants, Dental,<br />Tummy tuck, root canal, Rhino plasty and <br />more</h5>

                <button className="p-3 border-2 border-pink-600 rounded-3xl text-pink-600 mt-6">Explore Cosmetic    <FontAwesomeIcon icon={faArrowRight}/></button>

                </div>



            <div className="w-3/5">
                <img  src={hand} alt="" />
            </div>



            </div>





            <div className="p-5 ml-3 bg-green-100  tracking-wide flex justify-between  rounded-3xl  items-center">
                <div className="w-full ">

                <h2 className=" text-green-600"><b>WELLNESS</b> TREATMENTS</h2>

                <h1 className="text-3xl mt-4">
                Give yourself the  <br /> <b>time to relax</b>
                </h1>
                <h5 className="  font-thin mt-6">Treatments for Weight loss, Detox, Destress,<br />Traditonal Treatments, 3 day health rips and<br />more</h5>

                <button className="p-3 border-2 border-green-600 rounded-3xl text-green-600 mt-6">Explore Wellness    <FontAwesomeIcon icon={faArrowRight}/></button>

                </div>



            <div className="w-7/12">
                <img  src={leaf} alt="" />
            </div>



            </div>
        </div>
    );
};

export default Treatmenttypes;