
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import CustomerTickets from './CustomerTickets/CustomerTickets'
import { Bounce, ToastContainer } from 'react-toastify'




const fetchCustomers = async () => {
  const res = await fetch("/public/customers.json")
  return res.json()
}

function App() {
  const customerPromise = fetchCustomers()

  const [customersTask, setCustomersTask] = useState([]);

  const [inProgressCount, setInProgressCount] = useState([]);

  const [resolvedCount, setResolvedCount] = useState([]);


  const removedSelectedTask = (id) => {
    setCustomersTask(customersTask.filter((task) => task.id !== id));
    const remainingTickets = customersTask.filter(t => t.id !== id);
    setCustomersTask(remainingTickets);

  }


  return (
    <>
      <Navbar></Navbar>

      <Banner customersTask={customersTask} inProgressCount={inProgressCount} setInProgressCount={setInProgressCount}
        resolvedCount={resolvedCount} setResolvedCount={setResolvedCount}

      ></Banner>

      <CustomerTickets customerPromise={customerPromise} customersTask={customersTask}
        setCustomersTask={setCustomersTask}
        inProgressCount={inProgressCount}
        setInProgressCount={setInProgressCount}
        resolvedCount={resolvedCount}
        setResolvedCount={setResolvedCount}
        removedSelectedTask={removedSelectedTask}
      ></CustomerTickets>

      <Footer></Footer>

      {/* <ToastContainer></ToastContainer> */}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}

export default App

