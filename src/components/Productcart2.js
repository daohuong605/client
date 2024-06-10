import React from 'react'
import ReactStar from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCart2 = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <div className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/women-3.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/women-4.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>WOMEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Pocket UV Protection Parka</h5>
                    <p className='price'>980.000 VND</p>
                    <ReactStar
                        count={5}
                        size={24}
                        emptyIcon={<i className='far fa-star'></i>}
                        halfIcon={<i className='fa fa-star-half-alt'></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-10'>
                        <Link>
                            <img src='images/Heart.png' alt='addheart' style={{width: '25px', height: '25px'}}/>
                        </Link>
                        <Link>
                            <img src='images/addcart.png' alt='addcart' style={{width: '25px', height: '25px'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-3'}`}>
        <div className='product-card position-relative'>
            <div className='product-image'>
                <img src='images/women-3.avif' alt='productimage' className="img-fluid"/>
                <img src='images/women-4.avif' alt='productimage' className="img-fluid"/>
            </div>
            <div className='product-details'>
                <h6 className='gender'>WOMEN</h6>
                <h6 className='size'>XS-XXL</h6>
                <h5 className='product-title'>Pocket UV Protection Parka</h5>
                <p className='price'>980.000 VND</p>
                <ReactStar
                    count={5}
                    size={24}
                    emptyIcon={<i className='far fa-star'></i>}
                    halfIcon={<i className='fa fa-star-half-alt'></i>}
                    activeColor="#ffd700"
                />
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-10'>
                    <Link>
                        <img src='images/Heart.png' alt='addheart' style={{width: '25px', height: '25px'}}/>
                    </Link>
                    <Link>
                        <img src='images/addcart.png' alt='addcart' style={{width: '25px', height: '25px'}}/>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-3'}`}>
            <div className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/women-3.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/women-4.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>WOMEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Pocket UV Protection Parka</h5>
                    <p className='price'>980.000 VND</p>
                    <ReactStar
                        count={5}
                        size={24}
                        emptyIcon={<i className='far fa-star'></i>}
                        halfIcon={<i className='fa fa-star-half-alt'></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-10'>
                        <Link>
                            <img src='images/Heart.png' alt='addheart' style={{width: '25px', height: '25px'}}/>
                        </Link>
                        <Link>
                            <img src='images/addcart.png' alt='addcart' style={{width: '25px', height: '25px'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        
    </>
  )

}

export default ProductCart2;