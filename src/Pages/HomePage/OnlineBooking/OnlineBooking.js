import React from 'react';
import './OnlineBooking.css'

const OnlineBook = () => {
    return (
        <div className="container mx-auto">
            <div className="col-sm-12 d-flex container my-5" style={{ backgroundImage: "linear-gradient(#06beb6, #48b1bf)", borderRadius: "25px" }}>
                <div className="col-lg-6 text-light p-5" style={{}}>
                    <p className="fw-bold py-3">SAVE TIME. FEEL BETTER.</p>
                    <h4 className="pb-5 font-monospace" >Skip The Waiting <br /> Room! Register Online <br /> Before You Arrive.</h4>
                    <button className="btn bg-dark text-light mb-5"><i className="fas fa-user-edit me-3"></i>BOOK AN APPOINTMENT</button>
                    <p className="fw-lighter mt-5"><i className="fas fa-phone-alt me-3"></i>For more information call +09123452498 <br /> <i className="fas fa-envelope me-3"></i>Email:Az-health-care01@xzy.com <br /><i className="fab fa-facebook-f me-3"></i>facebook.com/Az Health Care</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img src="https://i.ibb.co/yWBS0py/online-book-removebg-preview.png" style={{}} className="img-responsive" alt="" srcSet="" />
                </div>
            </div>
        </div>
    );
};

export default OnlineBook;