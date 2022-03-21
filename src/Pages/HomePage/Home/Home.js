import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Navbar from "../Navbar/Navbar";
// import OnlineBooking from "../OnlineBooking/OnlineBooking"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction></Introduction>
      <Blogs />
      <Banner></Banner>
      {/* <OnlineBooking></OnlineBooking> */}
      <Footer />
    </div>
  );
};

export default Home;
