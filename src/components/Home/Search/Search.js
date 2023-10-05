import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import oparation from '../../../Images/oparation.jpg';

const Search = () => {
    return (
        <div className="flex justify-between w-5/6 p-5 bg-blue-100 mx-auto rounded-3xl mt-10">
            <div >
                <h1 className="text-5xl "><b >World's Largest</b> Health <br />Travel Platform</h1>

                <h3 className="mt-4 text-2xl text-gray-700">Find the best doctors across the world</h3>

                
                <div className="relative  border-b shadow-lg  mt-5 rounded-xl ">
                <input className="relative rounded-xl  p-3 w-full outline-none " type="search" placeholder="Search disease, surgeons or hospital" />

                <button className="absolute right-1 top-2 text-3xl text-blue-500 "><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </div>

                <div className="flex justify-between items-center mt-5">
                <button className="px-10 py-2 bg-blue-500 text-white rounded-3xl ">Explore Medical</button>

                <h6 className="text-blue-500 text-sm">Treatments for Neuro & Spine, IVF & Gyne,Cardiac,<br />Urology,Gastro, Transplants and more</h6>
                </div>
                
            </div>

            <div className="w-2/4">
                <img  className="rounded-2xl" src={oparation} alt="" />
            </div>
        </div>
    );
};

export default Search;