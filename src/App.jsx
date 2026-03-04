
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import CustomerTickets from './CustomerTickets/CustomerTickets'




const fetchCustomers = async () => { 
  const res = await fetch("/public/customers.json")
  return res.json()
}

function App() {
const customerPromise = fetchCustomers()

const [customersTask, setCustomersTask] = useState([])
console.log(customersTask)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CustomerTickets customerPromise={customerPromise} customersTask={customersTask} setCustomerTask={setCustomersTask}></CustomerTickets>
      <Footer></Footer>
    </>
  )
}

export default App


// [
//   {
//     "id": 1,
//     "title": "Login page not working",
//     "description": "User cannot log in with correct credentials.",
//     "customer": "Rahim Uddin",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-01T09:15:00Z"
//   },
//   {
//     "id": 2,
//     "title": "Payment gateway error",
//     "description": "Payment fails during checkout process.",
//     "customer": "Nusrat Jahan",
//     "priority": "High",
//     "status": "In Progress",
//     "createdAt": "2026-03-01T10:30:00Z"
//   },
//   {
//     "id": 3,
//     "title": "Profile image upload issue",
//     "description": "Unable to upload profile picture.",
//     "customer": "Tanvir Hasan",
//     "priority": "Medium",
//     "status": "Open",
//     "createdAt": "2026-03-01T11:45:00Z"
//   },
//   {
//     "id": 4,
//     "title": "Password reset email not received",
//     "description": "Customer did not receive reset password email.",
//     "customer": "Ayesha Akter",
//     "priority": "High",
//     "status": "Resolved",
//     "createdAt": "2026-03-01T12:10:00Z"
//   },
//   {
//     "id": 5,
//     "title": "Website loading slowly",
//     "description": "Homepage takes too long to load.",
//     "customer": "Imran Hossain",
//     "priority": "Medium",
//     "status": "In Progress",
//     "createdAt": "2026-03-01T13:00:00Z"
//   },
//   {
//     "id": 6,
//     "title": "Error 404 on product page",
//     "description": "Product details page shows 404 error.",
//     "customer": "Sadia Islam",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-01T14:20:00Z"
//   },
//   {
//     "id": 7,
//     "title": "Cart not updating",
//     "description": "Items are not updating in the shopping cart.",
//     "customer": "Farhan Ahmed",
//     "priority": "Medium",
//     "status": "Open",
//     "createdAt": "2026-03-01T15:10:00Z"
//   },
//   {
//     "id": 8,
//     "title": "Mobile view layout broken",
//     "description": "UI elements overlap on mobile devices.",
//     "customer": "Mithila Roy",
//     "priority": "Low",
//     "status": "In Progress",
//     "createdAt": "2026-03-01T16:05:00Z"
//   },
//   {
//     "id": 9,
//     "title": "Search function not returning results",
//     "description": "Search bar shows no results for valid keywords.",
//     "customer": "Arif Khan",
//     "priority": "Medium",
//     "status": "Open",
//     "createdAt": "2026-03-01T17:25:00Z"
//   },
//   {
//     "id": 10,
//     "title": "Order confirmation email delayed",
//     "description": "Order confirmation email received after several hours.",
//     "customer": "Jannat Ferdous",
//     "priority": "Low",
//     "status": "Resolved",
//     "createdAt": "2026-03-01T18:40:00Z"
//   },
//   {
//     "id": 11,
//     "title": "Account locked unexpectedly",
//     "description": "Customer account locked without reason.",
//     "customer": "Hasan Mahmud",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-02T08:15:00Z"
//   },
//   {
//     "id": 12,
//     "title": "Discount code not applying",
//     "description": "Promo code shows invalid during checkout.",
//     "customer": "Sumaiya Rahman",
//     "priority": "Medium",
//     "status": "In Progress",
//     "createdAt": "2026-03-02T09:30:00Z"
//   },
//   {
//     "id": 13,
//     "title": "Notification settings not saving",
//     "description": "Changes in notification preferences are not saved.",
//     "customer": "Sakib Chowdhury",
//     "priority": "Low",
//     "status": "Open",
//     "createdAt": "2026-03-02T10:45:00Z"
//   },
//   {
//     "id": 14,
//     "title": "App crashes on startup",
//     "description": "Mobile app crashes immediately after launch.",
//     "customer": "Rima Sultana",
//     "priority": "High",
//     "status": "In Progress",
//     "createdAt": "2026-03-02T11:20:00Z"
//   },
//   {
//     "id": 15,
//     "title": "Unable to download invoice",
//     "description": "Invoice download button not working.",
//     "customer": "Kabir Ahmed",
//     "priority": "Medium",
//     "status": "Resolved",
//     "createdAt": "2026-03-02T12:00:00Z"
//   }
// ]
