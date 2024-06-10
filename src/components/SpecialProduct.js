import React from 'react'
import ReactStar from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProduct = () => {
  return (
    <div className='col-3 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <img src='images/men-5.jpg' alt='product' className="img-fluid"/>
            </div>
            <div className='special-product-content'>
                <h5 className='gender'>Men</h5>
                <h6 className='size'>XS-XXL</h6>
                <h5 style={{fontSize: '18px'}} className='title'>SMART ANKLE PANTS</h5>
                <p>Cotton twill material made from fine yarn for a smooth texture.</p>
                <p className='price'>
                    <span className='red-p'>489.000 VND</span> &nbsp; <strike>588.000 VND</strike>
                </p>
                <ReactStar
                    count={5}
                    size={24}
                    emptyIcon={<i className='far fa-star'></i>}
                    halfIcon={<i className='fa fa-star-half-alt'></i>}
                    activeColor="#ffd700"
                />
                <div className='discount-till d-flex align-items-center gap-10'>
                    <p className='mb-0'>
                        <b>5 days</b>
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                        <span className='badge rounded-circle p-2 bg-danger'>1</span>
                    </div>
                </div>
                <div className='prod-coun my-3'>
                        <p>Products: 5</p>
                        <div className='progress'>
                            <div
                                className='progress-bar'
                                role='progressbar'
                                style={{width: '25%'}}
                                aria-valuenow='25'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            ></div>
                        </div>
                </div>
                <Link className='button'>Add to Card</Link>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct