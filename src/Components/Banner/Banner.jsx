import React from 'react';  

const Banner = ({inProgressCount,  resolvedCount}) => {
    
    return (
        <div className='lg:px-10 lg:py-10 py-5 lg:flex justify-between gap-5 space-y-5 
        '>

            <div className="card bg-[#422AD5] text-primary-content lg:h-72 lg:w-6/12">
            
                <div className="card-body items-center text-center text-white py-22">
                    <h2 className="card-title text-2xl ">In-Progress</h2>
                    <h2 className="text-6xl font-bold">{inProgressCount.length}</h2>
                     
                </div>
                
            </div>

            <div className="card bg-[#54CF68] text-white lg:h-72 lg:w-6/12">
                <div className="card-body items-center text-center py-22">
                    <h2 className="card-title text-2xl">Resolved</h2>
                    <h2 className="text-6xl font-bold">{resolvedCount.length}</h2>
                </div>
            </div>

        </div>


    );
};

export default Banner;