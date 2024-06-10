import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return ( 
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-8.jpg" className="img-fluid" alt="blog"/>
          </div>
        </div>
        <div className="blog-content">
            <p className="date" style={{  
                fontSize: '13px',
                lineHeight: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0',
                fontWeight: '400',
                color: '#777777',
                padding: '0'}}
            >
                    11 Jan, 2024
            </p>
            <h5 className="title" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>SWEAT COLLECTION</h5>
            <p className="desc" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Endless styling possibilities with simple sweats in quality fabrics.</p>
            <Link to ='/' className="button">Read More</Link>
        </div>
      </div>
    );
  }
  

export default BlogCard;