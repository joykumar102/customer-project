
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import CustomerTickets from './CustomerTickets/CustomerTickets'
import { ToastContainer } from 'react-toastify'




const fetchCustomers = async () => { 
  const res = await fetch("/public/customers.json")
  return res.json()
}

function App() {
const customerPromise = fetchCustomers()

const [customersTask, setCustomersTask] = useState([]);

const [inProgressCount, setInProgressCount] = useState(0);

const [resolvedCount, setResolvedCount] = useState(0);


  return (
    <>
      <Navbar></Navbar>

      <Banner inProgressCount={inProgressCount} setInProgressCount={setInProgressCount} 
      resolvedCount={resolvedCount} setResolvedCount={setResolvedCount}
      ></Banner>

      <CustomerTickets customerPromise={customerPromise} customersTask={customersTask}
       setCustomersTask={setCustomersTask} 
       inProgressCount={inProgressCount} 
       setInProgressCount={setInProgressCount}
       resolvedCount={resolvedCount}
       setResolvedCount={setResolvedCount}
       ></CustomerTickets>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App

