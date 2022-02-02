import React from 'react';
import banner1 from '../../images/Banner/banner-1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container-fluid  pt-5'>
            <div className="container">
            <h1 className='text-center mt-5'>How to Simplify the Process of Credit Card Data</h1>

              <p className='text-center mt-4 '>
                   Paying for something online with a credit card is a simple task. Most of us build a habit of paying  online  — we take a  credit card from a wallet, enter the card details into a web form, and click a submit button. But there are a few things designers can do to make the procedure of data input even  simpler.
             </p>
            </div>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-50 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner1} class="d-block w-50 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner1} class="d-block w-50 mx-auto" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        <div className='text-center mt-4'>
            <button className='banner-btn'>Get Card</button>
        </div>
</div>
            
    );
};

export default Banner;