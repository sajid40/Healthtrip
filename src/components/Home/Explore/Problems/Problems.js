import React from 'react';

const Problems = ({datas}) => {
    return (
        <div>
           
           
            <div  className="grid grid-cols-3 gap-3 w-5/6 mx-auto mt-10">
            {
            datas.map(name=>
                (<h2 className="text-center  py-3 px-5 bg-gray-400 rounded-2xl  ">{name}</h2>) )
            }
        </div>
        
        </div>
    );
};

export default Problems;