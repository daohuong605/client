import React from 'react'
import { Link } from 'react-router-dom';
import {BsTiktok, BsFacebook, BsYoutube, BsInstagram} from "react-icons/bs"


export const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/plane.png' alt='newletter' style={{width: '100px', height: '100px'}} />
                <h2 className='mb -0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='Your Email Address'
                  aria-label='Your Email Address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subcirbe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='text-white mb-4 d-flex flex-column'>
                <p>Company Name: UNIQLO VIETNAM CO., LTD</p>
                <address>
                  Headquartes Address: 26th Floor, Vietel Tower, No.285, Cach Mang Thang Tam Street, Ward 12, Dictrict 10, Ho Chi Minh City, Vietnam
                </address>
                <p>For any inquiry, please visit our FAQ page</p>
                <p>Working Hours: 9:00 - 18:00 (Monday - Sunday)</p>
                <div className='social-icon d-flex align-items-center gap-15 text-white'>
                  <a href='https://www.tiktok.com'>
                    <BsTiktok className='text-white fs-4'/>
                  </a>
                  <a href='https://www.instagram.com'>
                    <BsInstagram className='text-white fs-4'/>
                  </a>
                  <a href='https://www.facebook.com'>
                    <BsFacebook className='text-white fs-4'/>
                  </a>
                  <a href='https://www.youtube.com'>
                    <BsYoutube className='text-white fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>About Uniqlo</h4>
              <div className='text-white mb-4 d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Information</Link>
                <Link className='text-white py-2 mb-1'>Store Locator</Link>
                <Link className='text-white py-2 mb-1'>Career</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='text-white mb-4 d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Membership</Link>
                <Link className='text-white py-2 mb-1'>Profile</Link>
                <Link className='text-white py-2 mb-1'>Coupons</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Help</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Return Policy</Link>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()};Powered by Developer's VNUIS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;