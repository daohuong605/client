import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStar from "react-rating-stars-component";
import ProductCart from '../components/ProductCart';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
  return (
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title= "Our Store" />
        <div className='store-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Women</li>
                                    <li>Men</li>
                                    <li>Kids</li>
                                    <li>Baby</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availablity</h5>
                                <div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value='' id=''></input>
                                        <label className='form-check-label' htmlFor=''>
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value='' id=''></input>
                                        <label className='form-check-label' htmlFor=''>
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='form-floating'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='floatingInput'
                                            placeholder='From'
                                        />
                                        <label htmlFor='floatingInput'>From</label>
                                    </div>
                                        <div className='form-floating'>
                                            <input
                                                type='email'
                                                className='form-control'
                                                id='floatingInput'
                                                placeholder='To'
                                            />
                                            <label htmlFor='floatingInput'>To</label>
                                        </div>
                                </div>
                                <h5 className='sub-title'>Colors</h5>
                                <div>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li style={{backgroundColor: '#FFFFFF'}}></li>
                                            <li style={{backgroundColor: '#000000'}}></li>
                                            <li style={{backgroundColor: '#FF0000'}}></li>
                                            <li style={{backgroundColor: '#00FF00'}}></li>
                                            <li style={{backgroundColor: '#0000FF'}}></li>
                                            <li style={{backgroundColor: '#FFFF00'}}></li>
                                            <li style={{backgroundColor: '#00FFFF'}}></li>
                                            <li style={{backgroundColor: '#FF00FF'}}></li>
                                            <li style={{backgroundColor: '#C0C0C0'}}></li>
                                            <li style={{backgroundColor: '#808080'}}></li>
                                            <li style={{backgroundColor: '#800000'}}></li>
                                            <li style={{backgroundColor: '#808000'}}></li>
                                            <li style={{backgroundColor: '#008000'}}></li>
                                            <li style={{backgroundColor: '#800080'}}></li>
                                            <li style={{backgroundColor: '#008080'}}></li>
                                            <li style={{backgroundColor: '#000080'}}></li>
                                            <li style={{backgroundColor: '#00FFCC'}}></li>
                                            <li style={{backgroundColor: '#CC99FF'}}></li>
                                            <li style={{backgroundColor: '#FFCC33'}}></li>
                                            <li style={{backgroundColor: '#66CCFF'}}></li>
                                            <li style={{backgroundColor: '#FF99FF'}}></li>
                                            <li style={{backgroundColor: '#FF9900'}}></li>
                                            <li style={{backgroundColor: '#3399FF'}}></li>
                                            <li style={{backgroundColor: '#FF33CC'}}></li>
                                            <li style={{backgroundColor: '#3366FF'}}></li>
                                            <li style={{backgroundColor: '#66FF66'}}></li>
                                            <li style={{backgroundColor: '#FFCCFF'}}></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            XS(2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            S(2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            M(2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            L(2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            XL(2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            XXL(2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        All Tops
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        T-shirts
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Sweater
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Jeans
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Sweatshirts & Hoodies
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Jackets & Coats
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Bodysuits
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Random Product
                            </h3>
                            <div>
                                <div className='random-products d-flex mb-3'>
                                    <div className='w-50'>
                                        <img 
                                            src='images/women-2.avif'
                                            className='img-fluid'
                                            alt='product'
                                        />
                                    </div>
                                    <div className='w-50' style={{marginLeft: '7%'}}>
                                        <h5>Crew Neck Short Sleeve T-Shirt</h5>
                                        <b>293.000 VND</b>
                                        <ReactStar
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#ffd700'
                                        ></ReactStar>
                                    </div>
                                </div>
                                <div className='random-products d-flex mb-3'>
                                    <div className='w-50'>
                                        <img 
                                            src='images/kid-2.avif'
                                            className='img-fluid'
                                            alt='product'
                                        />
                                    </div>
                                    <div className='w-50' style={{marginLeft: '7%'}}>
                                        <h5>KIDS AIRism Cotton Graphic Short Sleeve T-Shirt</h5>
                                        <b>243.000 VND</b>
                                        <ReactStar
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#ffd700'
                                        ></ReactStar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{width: '100px'}}>Sort By:</p>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='manual'>Featured</option>
                                        <option value='best-selling'selected='selected'>
                                            Best selling
                                        </option>
                                        <option value='title-ascending'>
                                            Alphabetically, A-Z
                                        </option>
                                        <option value='title-descending'>
                                            Alphabetically, Z-A
                                        </option>
                                        <option value='price-ascending'>
                                            Price, low to high
                                        </option>
                                        <option value='price-descending'>
                                            Price, high to low
                                        </option>
                                        <option value='created-ascending'>
                                            Date, old to new
                                        </option>
                                        <option value='created-descending'>
                                            Date, new to old
                                        </option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>20 Products</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={() => {
                                                setGrid(3);
                                            }} 
                                            src='images/grid-1.png' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                        <img onClick={() => {
                                                setGrid(4);
                                            }}  
                                            src='images/grid-2.png' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                        <img onClick={() => {
                                                setGrid(6);
                                            }} 
                                            src='images/grid-3.png' 
                                            className='d-block img-fluid' 
                                            alt='grid' />
                                        <img onClick={() => {
                                                setGrid(12);
                                            }}  
                                            src='images/grid-4.png' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCart grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )

}

export default OurStore