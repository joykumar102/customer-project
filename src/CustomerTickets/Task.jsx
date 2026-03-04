import React from 'react';

const Task = ({ customersTask, resolvedCount, setResolvedCount, setInProgressCount, inProgressCount}) => {

    const handleResolve = () => {
        setResolvedCount(resolvedCount + 1)
        setInProgressCount(inProgressCount - 1)
        
    }
    return (
        <div className='space-y-8 py-5'>

            {
                customersTask.map(customer =>
                    <div className="card bg-base-100  shadow-lg">
                        <div className="card-body ">
                            <h2 className="text-xl font-semibold">{customer.title}</h2>
                            <button onClick={()=>{
                                handleResolve(customer)
                               
                                    
                            }} className="btn bg-[#02A53B] btn-block text-white">Complete</button>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default Task;


