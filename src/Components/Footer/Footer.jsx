import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-white  p-10 lg:px-20">
  <nav>
    <h6 className="text-xl font-bold ">CS — Ticket System</h6>
    <p className='w-62 '>A CS Ticket System is a centralized customer support platform that collects, organizes, tracks, and manages service requests efficiently, assigns tickets to appropriate agents, monitors progress, and ensures timely communication and problem resolution.</p>
  </nav>
  <nav>
    <h6 className="text-xl font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saied</a>
    
  </nav>
  <nav>
    <h6 className="text-xl font-bold">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Customer Stories</a>
  </nav>
  <nav>
    <h6 className="text-xl font-bold">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="text-xl font-bold">Social Links</h6>
    <a className="link link-hover"><i class="fa-brands fa-x-twitter text-xl pr-2"></i> @CS- Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-linkedin-in text-xl pr-2"></i> @CS- Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-square-facebook text-xl pr-2"></i> @CS- Ticket System</a>
    <a className="link link-hover"><i class="fa-regular fa-envelope text-xl pr-2"></i>Support@cst.com</a>
  </nav>
</footer>
<footer className=" bg-neutral text-white border-base-300 border-t  px-10 py-4">
 
 <div className='text-center py-3'>
    <h1 className=''>© 2025 CS — Ticket System. All rights reserved.</h1>
 </div>
</footer>
        </div>
    );
};

export default Footer;