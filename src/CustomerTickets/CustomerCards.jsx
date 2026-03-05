import React, { use } from 'react';
import { toast } from 'react-toastify';


const CustomerCards = ({ customerPromise, customersTask, setCustomersTask , setInProgressCount, inProgressCount, resolvedCount,  setResolvedCount, removedSelectedTask}) => {

    const customerData = use(customerPromise);

    const handleTickets = (customer) => {
        setCustomersTask([...customersTask, customer])
        toast.success('Ticket added to Task Status')
        
    };


    return (
        <div className='grid lg:grid-cols-2 gap-5 mt-5'>
            {
                customerData.map(customer => (
                    <div
                        key={customer.id}
                        onClick={() => {
                        handleTickets(customer) 
                        setInProgressCount(inProgressCount + 1)
                        
                        }
                        }
                        className="card bg-base-100 card-lg shadow-lg border-2 border-white cursor-pointer"
                    >
                        <div className="card-body">

                            <div className='flex justify-between'>
                                <h2 className="card-title">
                                    {customer.title}
                                </h2>

                                {/* Status Badge */}
                                {
                                    customer.status === 'Open' ? (
                                        <h2 className="text-xl border-2 p-1 px-2 rounded-4xl bg-green-200">
                                            <i className="fa-solid fa-circle mr-2 text-green-600"></i>
                                            {customer.status}
                                        </h2>
                                    ) : customer.status === 'In Progress' ? (
                                        <h2 className="text-xl border-2 p-1 px-2 rounded-4xl bg-yellow-200">
                                            <i className="fa-solid fa-circle mr-2 text-yellow-600"></i>
                                            {customer.status}
                                        </h2>
                                    ) : (
                                        <h2 className="text-xl border-2 p-1 px-2 rounded-4xl bg-blue-200">
                                            <i className="fa-solid fa-circle mr-2 text-blue-600"></i>
                                            {customer.status}
                                        </h2>
                                    )
                                }
                            </div>

                            <p>{customer.description}</p>

                            <div className='flex justify-between mt-4'>
                                <div className="flex gap-4">
                                    <p># {customer.rank}</p>
                                    <p>{customer.priority}</p>
                                </div>

                                <div className='flex gap-4'>
                                    <p>{customer.customer}</p>
                                    <p>
                                        <i className="fa-regular fa-calendar mr-2"></i>
                                        {customer.createdAt}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CustomerCards;