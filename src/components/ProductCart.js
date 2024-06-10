import React from 'react'
import ReactStar from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCart = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to = ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/women-7.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/women-8.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>WOMEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Pique Short Sleeve Polo Shirt </h5>
                    <p className='price'>391.000 VND</p>
                    <p className={`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                        A classic design with a sleek look.
                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
        <Link to= ':id' className='product-card position-relative'>
            <div className='product-image'>
                <img src='images/women-9.avif' alt='productimage' className="img-fluid"/>
                <img src='images/women-10.avif' alt='productimage' className="img-fluid"/>
            </div>
            <div className='product-details'>
                <h6 className='gender'>WOMEN</h6>
                <h6 className='size'>XS-XXL</h6>
                <h5 className='product-title'>Rayon Long Sleeve Blouse</h5>
                <p className='price'>391.000 VND</p>
                <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Wrinkle-resistant for easy care after washing.
                </p>
                <ReactStar
                    count={5}
                    size={24}
                    value={5}
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
        </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/women-11.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/women-12.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>WOMEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Sweat Long Sleeve Full-Zip Hoodie</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                        Voluminous cut for easy layering.
                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/women15.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/women-16.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>WOMEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Hot Ultra Light Down Jackets</h5>
                    <p className='price'>980.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Premium down plus technology warmth.
                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/women-17.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/women-18.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>WOMEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Hot Stretch Slim Ankle Jeans</h5>
                    <p className='price'>980.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Sleek ankle length with a straight cut below the knees.
                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/men-6.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/men-7.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>MEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Fleece Long Sleeve Full-Zip Jacket</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Lightweight yet cozy. Dense, warm springy fleece.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/men-8.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/men-9.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>MEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Cargo Pants Full-Zip Jacket</h5>
                    <p className='price'>784.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Stretch for comfort, warm springy fleece and easy movement.</p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={5}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/men-10.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/men-11.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>MEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>HEATTECH  Crew Neck T-Shirt</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Premium 100% SUPIMA® cotton lining warm springy fleece.
                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/men-12.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/men-13.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>MEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Broadcloth Long Sleeve Shirt</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Supple ultra-long cotton with a casual look.                     </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/men-14.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/men-15.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>MEN</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Half Sleeve Oversized T-Shirt</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                     Half sleeves for a relaxed look.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={5}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/kid-4.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/kid-5.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>KIDS</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Stretch Long Sleeve Sweatshirt</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    In a fairly relaxed cut and look.
                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        classNames={3}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/kid-6.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/kid-7.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>KIDS</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Flower Printed Short Sleeve Dress</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Airy fabric and a comfortable cut.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={3}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/kid-8.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/kid-9.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>KIDS</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Pique Short Sleeve Polo Shirt</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Versatile, classic design and cut.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={5}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/kid-10.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/kid-11.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>KIDS</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Sweat Long Sleeve Full-Zip Hoodie</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Casual look makes styling easy.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={3}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/kid-12.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/kid-13.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>KIDS</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Souffle Yarn Long Sleeve Sweater</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Light, warm, and non-itchy.                  </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/baby-4.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/baby-5.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>BABY</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Fleece Jacket Long Sleeve</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Fluffy fleece for comfort and warmth.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={3}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/baby-6.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/baby-7.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>BABY</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Dry Pajamas Short Sleeve</h5>
                    <p className='price'>391.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Quick-drying for stay-fresh comfort and relaxed</p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/baby-8.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/baby-9.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>BABY</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'> Neck T-Shirt Short Sleeve</h5>
                    <p className='price'>195.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Relaxed cut for a easy and casual style.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to= ':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/baby-10.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/baby-11.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>BABY</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Disney Long Sleeve Pajamas</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Pajamas with Disney's high-quality wooden toy.                    </p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={5}
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
            </Link>
        </div>
        <div className= {`${location.pathname = '/store' ? `gr-${grid}`: 'col-4'}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='product-image'>
                    <img src='images/baby-12.avif' alt='productimage' className="img-fluid"/>
                    <img src='images/baby-13.avif' alt='productimage' className="img-fluid"/>
                </div>
                <div className='product-details'>
                    <h6 className='gender'>BABY</h6>
                    <h6 className='size'>XS-XXL</h6>
                    <h5 className='product-title'>Hot Washable Full-Zip Parka</h5>
                    <p className='price'>489.000 VND</p>
                    <p className= {`description ${grid ===12 ? 'd-block' : "d-none"}`}>
                    Improved padding with a higher fill power rating.</p>
                    <ReactStar
                        count={5}
                        size={24}
                        value={4}
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
            </Link>
        </div>
        
        
    </>
  )

}

export default ProductCart;