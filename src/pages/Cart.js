import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <>
        <Meta title={"Shopping Cart"} />
        <BreadCrumb title= "Shopping Cart" />
        <section className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product: 1</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex -align-items-center'>
                                <div className='w-25'>
                                    <img src='images/women-9.avif' className='img-fluid' alt='product'/>
                                </div>
                                <div className='w-75'>
                                    <h5 className='title'>Rayon Long Sleeve Blouse</h5>
                                    <p className='color'>Color: blue</p>
                                    <p className='size'>Size: L</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>391.000 VND</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control w-30' type='number' name='' min={1} max={100} value={1} id=''/>
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger'/>
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className='price'>391.000 VND</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        
                        <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex -align-items-center'>
                                <div className='w-25'>
                                    <img src='images/women-7.avif' className='img-fluid' alt='product'/>
                                </div>
                                <div className='w-75'>
                                    <h5 className='title'>Stretch Pique Short Sleeve Polo Shirt</h5>
                                    <p className='color'>Color: pink</p>
                                    <p className='size'>Size: L</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>391.000 VND</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control w-30' type='number' name='' min={1} max={100} value={1} id=''/>
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger'/>
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className='price'>391.000 VND</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex -align-items-center'>
                                <div className='w-25'>
                                    <img src='images/men-14.avif' className='img-fluid' alt='product'/>
                                </div>
                                <div className='w-75'>
                                    <h5 className='title'>Half Sleeve Oversized T-Shirt</h5>
                                    <p className='color'>Color: Green</p>
                                    <p className='size'>Size: L</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>391.000 VND</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control w-30' type='number' name='' min={1} max={100} value={1} id=''/>
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger'/>
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className='price'>391.000 VND</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 py-2 mt-4'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to='/product' className='button'>Continue To Shopping</Link>
                            <div className='d-flex flex-column align-items-end'>
                                <h4>SubTotal: 1.173.000 VND</h4>
                                <p>Texas and shipping caculated at checkout</p>
                                <Link to='/checkout' className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart