import React from 'react';
import '../Banner/Banner.css'
const Banner = () => {
    return (
        <div className='banner-bg-img text-light mt-5'>
            <div className="col-lg-7 text-start pe-5 pt-5" style={{ padding: "20px" }}>
                <h4 className='p-c-1 pt-5 pb-2'>Our Doctors</h4>
                <h2 className='text-info fs-2 py-3'>Meet Our Heart Specialists </h2>
                <h6>Your heart is in outstanding hands with the physicians at the Heart Clinic and over the course of many years. </h6>
            </div>
        </div>
    );
};

export default Banner;