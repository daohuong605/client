import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <>
        <Meta title={"Blog"} />
        <BreadCrumb title= "Blog" />
        <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-3'>
                <div className='filter-card mb-3'>
                  <h3 className='filter-title'>About Shop</h3>
                  <div>
                      <ul className='ps-0'>
                        <li>Home</li>
                        <li>Our Store</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                      </ul>
                  </div>
                </div>        
              </div>
              <div className='col-9'>
                <div className='row'>
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Blog