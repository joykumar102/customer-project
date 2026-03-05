import React, { Suspense } from 'react';
import CustomerCards from './CustomerCards';
import Task from './Task';
import ResolveTask from '../Components/ResolveTask/ResolveTask';


const CustomerTickets = ({ customerPromise, customersTask, setCustomersTask, setInProgressCount, inProgressCount, resolvedCount, setResolvedCount, removedSelectedTask }) => {
    return (
        <div className='lg:flex lg:justify-between gap-5 lg:px-10 py-10'>
            <div className='lg:w-9/12'>
                <h1 className='text-3xl font-bold'>Customer Tickets</h1>

                <div>
                    <Suspense>
                        <CustomerCards
                            customerPromise={customerPromise}
                            customersTask={customersTask} setCustomersTask={setCustomersTask}
                            setInProgressCount={setInProgressCount}
                            inProgressCount={inProgressCount}
                            resolvedCount={resolvedCount}
                            setResolvedCount={setResolvedCount}
                            removedSelectedTask={removedSelectedTask}
                        ></CustomerCards>
                    </Suspense>
                </div>
            </div>


            {/* status section */}
            <div className=' lg:w-3/12 px-2 space-y-2'>
                <h1 className='text-3xl font-semibold'>Task Status</h1>
              


                <Task customerPromise={customerPromise} customersTask={customersTask} setCustomersTask={setCustomersTask}
                    resolvedCount={resolvedCount}
                    setResolvedCount={setResolvedCount}
                    removedSelectedTask={removedSelectedTask}
                ></Task>



                <div className='space-y-2'>
                    <h1 className='text-3xl font-semibold'>Resolved Task</h1>
                    
                </div>

                <ResolveTask
                    customersTask={customersTask} 
                    resolvedCount={resolvedCount}
                            setResolvedCount={setResolvedCount}
                ></ResolveTask>
            </div>

        </div>
    );
};

export default CustomerTickets;