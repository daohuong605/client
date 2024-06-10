import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import {BsSearch} from "react-icons/bs";

const Header = () => {
  return(
    <>
      <header className='header-top-strip py -3'>
        <div className='container-xxl'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div  style={{fontSize: '20px', lineHeight: '1.5px'}}>
              <p className='text-white mb-0'>
                Free Shipping Over 999.000 VND & Free Return
              </p>
              <p className='text-end text-white mb-0'>
                Hotline: 
                <a className='text-white' href='tel: +84 123456789'>
                  +84 123456789
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='col-4 d-flex align-items-center'>
              <h2 style={{marginRight: '40px'}}>
                <Link style={{color: 'red', fontFamily: 'Impact Charcoal', fontWeight: 'bold', display: 'flex', alignItems: 'center', marginRight: '50px'}}>
                  <img src='/images/header.svg' alt='logo' style={{marginRight: '5px'}} />
                  UNIQLO
                </Link>
              </h2>
            </div>
            <div className='col-8'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-2" 
                  placeholder="Search Product Here..." 
                  aria-label="Search Product Here..." 
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-8'/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div class="dropdown">
                    <button 
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                      type="button" id="dropdownMenuButton1" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      <img src='images/menu.png' alt="" style={{height: "50px", width: "50px"}}/>
                      <span className='me-2 d-inline-block'>
                        Shop Categories</span>
                    </button>
                    <ul 
                      class="dropdown-menu" 
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="/Women">
                          Women
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Men">
                          Men
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Children">
                          Kids
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href='/Infant'>
                          Baby
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-item-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Product</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
                <div className='d-flex justify-content-end align-items-center'>
                  <div className='header-upper-links d-flex flex-colunm align-items-center justify-content-end'>
                    <div style={{marginLeft: '200px'}} className='text-center'>
                      <Link to= '/login'>
                        <img src='/images/account.png' alt='account' style={{width: '40px', height: '40px' }} />
                        <p className='mb-0'style={{margin: '0', color: 'black', textAlign: 'center'}}>
                          Login
                        </p>
                      </Link>
                    </div>
                    <div style={{marginLeft: '80px'}} className='text-center'>
                      <Link to= '/wishlist'>
                        <img src='/images/heart-1.png' alt='Heart'  style={{width: '40px', height: '40px'}}/>
                        <p className='mb-0' style={{margin: '0', color: 'black', textAlign: 'center'}}>
                          Wishlist
                        </p>
                      </Link>
                    </div>
                    <div style={{marginLeft: '80px'}} className='text-center'>
                      <Link to= '/cart'>
                        <img src='/images/cart.png' alt='Cart' style={{width: '40px', height: '40px'}}/>
                        <div className='d-flex flex-column'>
                          <span className='badge badge-warning' style={{color: 'black', fontSize: '14px'}}>0</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
    
  );
};

export default Header;