import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Checkout = () => {
  return (
    <>
        <Meta title={"Checkout"} />
        <BreadCrumb title= "Checkout" />

        <div className='checkout-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 style={{fontWeight:'600'}} className='website-name'>Uniqlo</h3>
                            <nav
                                style={{"--bs-breadcrumb-divider ": '>'}}
                                aria-label='breadcrumb'
                            >
                                <ol className='breadcrumb'>
                                    <li className='breadcrum-item active' aria-current ='page'>
                                        <Link style={{color: '#777777'}} to='/cart'>Cart</Link>
                                    </li>
                                    &nbsp;/
                                    <li className='breadcrumb-item active' aria-current='page'>
                                        Information
                                    </li>
                                    &nbsp;/
                                    <li className='breadcrum-item active' aria-current='page'>
                                        <a style={{color: '#777777'}} href='/'>Shipping</a>
                                    </li>
                                    &nbsp;/
                                    <li className='breadcrumb-item active' aria-current='page'>
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title total' style={{fontWeight:'600'}}>
                                Contact Information
                            </h4>
                            <p className='user-details total'>
                                Dao Huong (daohuong6523@gmail.com)
                            </p>
                            <h4 style={{fontWeight:'600'}} className='mb-3'>Shipping Address</h4>
                            <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='' selected disabled>Select Country</option>
                                        <option value='vietnam'>Vietnam</option>
                                        <option value='usa'>USA</option>
                                        <option value='uk'>UK</option>
                                        <option value='korea'>Korea</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='First Name' className='form-control'/>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Last Name' className='form-control'/>
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Address' className='form-control'/>
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Apartment, suite, ect.' className='form-control'/>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='City' className='form-control'/>
                                </div>
                                <div className='flex-grow-1'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='' selected disabled>
                                            Slelect State
                                        </option>
                                        <option value='california'>California</option>
                                        <option value='texas'>Texas</option>
                                        <option value='newyork'>New York</option>
                                        <option value='none'>None</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Zip code' className='form-control'/>
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to='/cart' className='text-dark'>
                                            <BiArrowBack className='me-2'/>
                                            Return to Cart
                                        </Link>
                                        <Link to='/cart' className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute' style={{top: '-10px', right:'2px'}}>1</span>
                                        <img src='images/women-7.avif' alt='product'className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: '18px', fontWeight: '400'}} className='title'>Stretch Pique Short Sleeve Polo Shirt</h5>
                                        <p className='total-price'>L / Pink</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1 mb-0'>
                                    <p className='total-price'>391.000 VND</p>
                                </div>
                            </div>
                        </div>

                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute' style={{top: '-10px', right:'2px'}}>1</span>
                                        <img src='images/women-9.avif' alt='product'className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: '18px', fontWeight: '400'}} className='title'>Rayon Long Sleeve Blouse</h5>
                                        <p className='total-price'>L / Blue</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1 mb-0'>
                                    <p className='total-price'>391.000 VND</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>SubTotal: </p>
                                <p className='total-price'>782.000 VND</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping: </p>
                                <p className='mb-0 total-price'>30.000 VND</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total: </h4>
                            <h5 className='total-price'>812.000 VND</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout