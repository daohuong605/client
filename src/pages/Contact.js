import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';

export const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
        <BreadCrumb title= "Contact Us" />
        <div className='contact-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476655.1213322856!2d105.17156287343745!3d21.037961600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455d87ac8ce9b%3A0x90601e2157bb934e!2zVHLGsOG7nW5nIFF14buRYyB04bq_IC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1705065882702!5m2!1svi!2s" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                >google maps</iframe>
              </div>
              <div className='col-12 mt-5'>
                <div className='contact-inner-wrapper d-flex justify-content-between'>
                  <div>
                    <h3 className='contact-title mb-4'>Contact</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <input type='name' className='form-control' placeholder='Name' />
                      </div>
                      <div>
                        <input type='mail' className='form-control' placeholder='Email' />
                      </div>
                      <div>
                        <input type='tel' className='form-control' placeholder='Phone Number' />
                      </div>
                      <div>
                        <textarea name='' id='' className='w-100 form-control' cols={30} rows={3} placeholder='Comments'></textarea>
                      </div>
                      <div>
                        <button className='button border-0'>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                    <div>
                      <ul className='ps-0'>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <AiOutlineHome className='fs-5'/>
                          <address className='mb-0'> No.1, Trinh Van Bo street, Nam Tu Liem dictrict,
                             Ha Noi.
                          </address>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiPhoneCall className='fs-5'/>
                          <a href='tel: +84 123456789'>+84 123456789</a>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <AiOutlineMail className='fs-5'/>
                          <a href='mailto:group4@gmail.com'>group4@gmail.com</a>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiInfoCircle className='fs-5'/>
                          <p className='mb-0'>9:00 - 18:00 (Monday - Sunday)</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default Contact;