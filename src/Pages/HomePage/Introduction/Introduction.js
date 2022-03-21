import React from 'react';

const Introduction = () => {
    return (
        <div className="container my-5">
            <div className='d-flex'>
                <h2 className="mx-auto fw-bolder p-3 d-inline-flex" style={{ fontFamily: "'Anton', sans-serif", backgroundColor: "#F9F3DF", marginTop: "100px" }}>Welcome from Az <span style={{ color: "#69DADB", }}>-Health-</span> care </h2>
            </div>
            <div style={{ backgroundImage: "url('https://i.ibb.co/VgRxKpT/introduction-bg.jpg')", marginTop: "50px", borderRadius: "15px", padding: "20px" }} className="text-light container">
                <div className='text-center'>
                    <h1>No matter what your concern contact us and take the best treatment.</h1>
                    <i className="fas fa-procedures fa-7x mx-auto" style={{ color: "#69DADB" }}></i>
                    <p>We have 23 special Dr. and 56+ Nurses for your hospitality. We also have 43+ bad and 9 ICU And 5 OT. Our hospital is stand by the river of the Padhma. So we can say proudly that our hospital have very much perfect environment for our patient. We have 4 ambulance system and also 2 ICU system included. We keep our hospital environment always clean. And we served best security for our VIP patient.</p>
                    <h4>We guys try to make sure your healthy and happy life, Keep smiling.</h4>
                </div>
            </div>
        </div>
    );
};

export default Introduction;