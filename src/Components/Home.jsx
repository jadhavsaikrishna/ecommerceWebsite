import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg2.jpg" className="card-img" alt="Background" 
            height="750px" />
        <div className="card-img-overlay d-flex flex-column ">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            Check Out All The TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
