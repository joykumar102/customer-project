import React from 'react';

const ResolveTask = ({customersTask, handleResolve, resolvedCount, setResolvedCount}) => {


    return (
        <div className='space-y-8 py-5'>

            {
                customersTask.map(customer =>
                    <div className="card bg-base-100  shadow-lg">
                        <div className="card-body ">
                            <h2 className="text-xl font-semibold">{customer.title}</h2>
                         
                        </div>
                    </div>)
            }

        </div>
    );
};

export default ResolveTask;