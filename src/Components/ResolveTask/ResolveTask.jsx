import React from 'react';

const ResolveTask = ({resolvedCount}) => {


    return (
        <div className='space-y-8 py-5'>

            {
                resolvedCount.map(customer => 
                    <div className="card ">
                        <div className="card-body border-l-4 border-blue-700 bg-green-300 font-light mb-5 rounded-lg shadow-sm space-y-4 p-3">
                            <h2 className="text-xl text-gray-600     font-semibold">{customer.title}</h2>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ResolveTask;