import React from 'react';
import victio1 from '../../assets/vector1.png'
const Banner = () => {
    
    return (
        <div className='lg:px-10 lg:py-10 py-5 lg:flex justify-between gap-5 space-y-5 
        '>

            <div className="card bg-[#422AD5] text-primary-content lg:h-72 lg:w-6/12">
            <img className='w-82  relative' src={victio1} alt="" />
                <div className="card-body absolute lg:ml-58 items-center text-center text-white py-22">
                    <h2 className="card-title text-2xl ">In-Progress</h2>
                    <h2 className="text-6xl font-bold">0</h2>
                     
                </div>
                
            </div>

            <div className="card bg-[#54CF68] text-white lg:h-72 lg:w-6/12">
                <div className="card-body items-center text-center py-22">
                    <h2 className="card-title text-2xl">Resolved</h2>
                    <h2 className="text-6xl font-bold">0</h2>
                </div>
            </div>

        </div>


    );
};

export default Banner;