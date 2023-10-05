import React, { useState } from 'react';
import Problems from './Problems/Problems';


const Explore = () => {

    const medical=['Cardiac','Onoology','Nephrology','Neuro/Spine','Orthopedic','Dermatology'];

    const asthetic=['Dental medecine','Dermatology & Cosmetology'];


    const wellness=['Anorectal Problems','Cardiology','ENT','Ayurveda','Endocrinology','GI & Bariatric'];

    const [button1,setButton1]=useState(true);
    const handleButton1=()=>{
        setButton1(!button1);
        setButton2(false);
        setButton3(false);


    }
    const [button2,setButton2]=useState(false);
    const handleButton2=()=>{
        setButton2(!button2);
        setButton1(false);
        setButton3(false);

    }
    const [button3,setButton3]=useState(false);
    const handleButton3=()=>{
        setButton3(!button3);
        setButton1(false);
        setButton2(false);

    }
    
    return (
        
        <div className="w-5/6 mx-auto text-center mt-10  ">

            <div className="text-3xl ">
            <button  className={`m-4 ${button1? 'border-b-2 border-blue-600' : ''}`} onClick={handleButton1}>Medical</button>
            <button className={`m-4 ${button2? 'border-b-2 border-blue-600' : ''}`}   onClick={handleButton2}>Asthetic</button>
            <button className={`m-4 ${button3? 'border-b-2 border-blue-600' : ''}`}   onClick={handleButton3}>Wellness</button>
            </div>

            <div>
                {button1 && (
                    <Problems datas={medical}/>
                )
                }
                {button2 && (
                   <div className="grid grid-cols-1 gap-3 w-2/6 mx-auto mt-10">
                    {
            asthetic.map(name=>
                (<h2 className="text-center  py-3 px-5 bg-gray-400 rounded-2xl  ">{name}</h2>) )
            }
                   </div>
                )
                }
                {button3 && (
                    <Problems datas={wellness}/>
                )
                }
            </div>

        </div>
    );
};

export default Explore;