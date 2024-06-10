import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ReactStar from "react-rating-stars-component";
import { useState } from 'react';
import ProductCart2 from '../components/Productcart2';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';



const SingleProduct = () => {
    const [grid] = useState(4);
    const [orderedProduct] = useState(true)
  return (
    <>
        <Meta title={"Product Name"} />
        <BreadCrumb title="Product Name" />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                            <img src='https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750' alt='productimage' className="img-fluid"/>
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                            <img 
                                src='https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/sub/vngoods_467212_sub7.jpg?width=750' 
                                alt='productimage' 
                                className="img-fluid"/>
                            </div>
                            <div>
                            <img src='https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/sub/vngoods_467212_sub9.jpg?width=750' alt='productimage' className="img-fluid"/>
                            </div>
                            <div>
                            <img src='https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=750' alt='productimage' className="img-fluid"/>
                            </div>
                            <div> 
                            <img src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467212/sub/goods_467212_sub14.jpg?width=750' alt='productimage' className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Stretch Pique Short Sleeve Polo Shirt</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>391.000 VND</p> <br></br>
                                <p style={{fontSize: '14px', color: '#777777'}}>A classic design with a sleek look. Soft and breathable cotton pique fabric.</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStar
                                        count={5}
                                        size={24}
                                        value={4}
                                        emptyIcon={<i className='far fa-star'></i>}
                                        halfIcon={<i className='fa fa-star-half-alt'></i>}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 reviews)</p>
                                </div>
                                <a className='review-btn' href='#review'>Write a review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-healing'>Size: </h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XS</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-healing'>Color: </h3>
                                    <div className='mb-0'>
                                        <ul className='colors ps-0'>
                                            <li style={{backgroundColor: '#FFFFFF'}}></li>
                                            <li style={{backgroundColor: '#FF99CC'}}></li>
                                            <li style={{backgroundColor: '#FFFFCC'}}></li>
                                            <li style={{backgroundColor: '#111111'}}></li>
                                            <li style={{backgroundColor: '#003366'}}></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-healing'>Quantity: </h3>
                                    <div className=''>
                                        <input 
                                            type='number'
                                            name=''
                                            min={1}
                                            max={100}
                                            className='form-control'
                                            style={{width:'70px'}}
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <Link to= '/cart' className='button border-0'type='submit'>Add To Cart</Link>
                                        <Link to='/checkout' className='button border-0 signup' type='submit'>Buy It Now</Link>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='whishlist' style={{fontSize: '14px', color:'#777777'}} className='fs-5 me-2'>
                                            <AiOutlineHeart />
                                            Add to Whishlist</a>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                            - Soft and breathable cotton pique fabric. <br></br>
                            - Slim fit. <br></br>
                            - Ribbed cuffs. <br></br>
                            - Classic button-up collar design. <br></br>
                            - Perfect for business and casual wear. <br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='reviews-wrapper py-5 home wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <h3>Reviews</h3>
                    <div className='col-12'>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className=' mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                            <ReactStar
                                                count={5}
                                                size={24}
                                                value={5}
                                                emptyIcon={<i className='far fa-star'></i>}
                                                halfIcon={<i className='fa fa-star-half-alt'></i>}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>
                                <div>
                                {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href='review'>Write a Review</a>
                                    </div>
                                )}
                                </div>
                            </div>
                            <div id='review' className='review-form py-4'>
                                <h4 className=' mb-2'>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <ReactStar
                                        count={5}
                                        size={24}
                                        emptyIcon={<i className='far fa-star'></i>}
                                        halfIcon={<i className='fa fa-star-half-alt'></i>}
                                        activeColor="#ffd700"
                                        />
                                    <div>
                                        <textarea name='' id='' className='w-100 form-control' cols={30} rows={3} placeholder='Comments'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Huong Dao</h6>
                                        <ReactStar
                                            count={5}
                                            size={24}
                                            value={5}
                                            emptyIcon={<i className='far fa-star'></i>}
                                            halfIcon={<i className='fa fa-star-half-alt'></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>Nice!</p>
                                </div>
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
    </>
  )
}


export default SingleProduct