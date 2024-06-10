import React from 'react'
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import SpecialProduct from '../components/SpecialProduct';
import { useState } from 'react';
import ProductCart2 from '../components/Productcart2';


export const Home = () => {
  const [grid] = useState(4);
  return (
    <>
      <section className='home-wrapper-1'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img 
                src='images/1.jpg' 
                className='img-fuild rounded-3' 
                alt='main banner' 
                style={{width: '640px', height: '434px'}}
                />
                <div className='main-banner-content position-absolute text-white'>
                  <h4>Ultra Light Down Parka (3D Cut)</h4>
                  <h5>Updated design, cut, and details for <br></br>a more casual style.</h5>
                  <h6 style={{color: 'red'}}>1.275.000 VND</h6>
                  <p>Limited Offers From 05.01-20.01.2024</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className='small-banner position-relative p-3'>
                  <img 
                  src='images/14.jpg' 
                  className='img-fuild rounded-3' 
                  alt='main banner' 
                  style={{width: '280px', height: '200px', margin: '1px'}}
                  />
                  <div className='small-banner-content position-absolute text-white'>
                    <h4>Sweat Pullover Hoodie</h4>
                    <h5>Find sweat fabric with <br></br>lovely color.</h5>
                    <h6 style={{color: 'white'}}>784.000 VND</h6>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img 
                  src='images/16.jpg' 
                  className='img-fuild rounded-3' 
                  alt='main banner' 
                  style={{width: '280px', height: '200px', margin: '1px'}}
                  />
                  <div className='small-banner-content position-absolute text-white'>
                    <h4>Knitted Short <br></br>Jacket</h4>
                    <h5>A statement piece ina <br></br>textured knit.</h5>
                    <h6 style={{color: 'white'}}>784.000 VND</h6>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img 
                  src='images/18.jpg' 
                  className='img-fuild rounded-3' 
                  alt='main banner' 
                  style={{width: '280px', height: '200px', margin: '1px'}}
                  />
                  <div className='small-banner-content position-absolute text-white'>
                    <h4>Kids Wide Fit Cargo Jogger Pants</h4>
                    <h5>Wide fit with sleek hems for easy movement.</h5>
                    <h6 style={{color: 'white'}}>489.000 VND</h6>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img 
                  src='images/21.jpg' 
                  className='img-fuild rounded-3' 
                  alt='main banner' 
                  style={{width: '280px', height: '200px', margin: '1px'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'> 
                  <img src='images/shipping.png' alt='clothes' style={{width: '45px', height:'30px'}}/>
                  <div>
                    <h6 style={{fontWeight: 'bold'}}>Free Shipping</h6>
                    <p className='mb-0' style={{fontSize: '13px'}}>From all orders over 999.000 VND</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/gift.png' alt='clothes' style={{width: '35px', height:'20px'}}/>
                  <div>
                    <h6 style={{fontWeight: 'bold'}}>Daily Surprise Offers</h6>
                    <p className='mb-0' style={{fontSize: '13px'}}>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/phone.png' alt='clothes' style={{width: '40px', height:'25px'}}/>
                  <div>
                    <h6 style={{fontWeight: 'bold'}}>Support 24/7</h6>
                    <p className='mb-0' style={{fontSize: '13px'}}>Shop with an expetrt</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/voucher.png' alt='clothes'style={{width: '40px', height:'25px'}}/>
                  <div>
                    <h6  style={{fontWeight: 'bold'}}>Affordable Prices</h6>
                    <p className='mb-0' style={{fontSize: '13px'}}>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/card.png' alt='clothes'style={{width: '40px', height:'25px'}}/>
                  <div>
                    <h6 style={{fontWeight: 'bold'}}>Secure Payments</h6>
                    <p className='mb-0' style={{fontSize: '13px'}}>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div style={{marginLeft: '7%', textAlign: 'center', margin: '0'}}>
                    <h6 style={{fontWeight: 'bold'}}>Women</h6>
                    <p style={{fontSize: '13px'}}>10 Items</p>
                  </div>
                  <img src='images/women-2.avif' alt='women' style={{height: '200px', width: '200px'}}/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div style={{marginLeft: '7%', textAlign: 'center', margin: '0'}}>
                    <h6 style={{fontWeight: 'bold'}}>Men</h6>
                    <p style={{fontSize: '13px'}}>10 Items</p>
                  </div>
                  <img src='images/men-1.avif' alt='men' style={{height: '200px', width: '200px'}}/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div style={{marginLeft: '7%', textAlign: 'center', margin: '0'}}>
                    <h6 style={{fontWeight: 'bold',}}>Kids</h6>
                    <p style={{fontSize: '13px'}}>10 Items</p>
                  </div>
                  <img src='images/kid-1.avif' alt='kids' style={{height: '200px', width: '200px'}}/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div style={{marginLeft: '7%', textAlign: 'center', margin:'0'}}>
                    <h6 style={{fontWeight: 'bold'}}>Baby</h6>
                    <p style={{fontSize: '13px'}}>10 Items</p>
                  </div>
                  <img src='images/baby-1.jpg' alt='baby' style={{height: '200px', width: '200px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
                <ProductCart2 grid={grid}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className='product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Product</h3>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
                <ProductCart2 grid={grid}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Least Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}
 export default Home;