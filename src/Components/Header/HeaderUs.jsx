import React from 'react'
import movingVanImg from '../../assets/moving-van.jpg'; // Adjust the path as necessary
import { Link, Route } from 'react-router-dom';


function HeaderUs() {
  return (
    <div>
        <div id='info' className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">Move With Joy</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to our website, where we are on a mission to provide exceptional moving services to customers in the India. As a startup, we believe that moving doesn't have to be stressful or complicated, and we are passionate about making the process as seamless and enjoyable as possible.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      
          <Link to="/quote" className="btn btn-primary btn-lg px-4 me-sm-3">
            Get a Quote
          </Link>
          <Link to="/contact" className="btn btn-outline-secondary btn-lg px-4">
            Contact us
          </Link>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '45vh' }}>
        <div className="container px-5">
          <img
            src={movingVanImg}
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Moving van"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderUs