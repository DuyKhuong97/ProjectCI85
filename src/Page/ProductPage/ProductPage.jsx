import React from 'react'

import './ProductPage.scss'
import Header from '../../Components/Header/Header'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Footer from '../../components/Footer/Footer'


const ProductPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb menuItem='Tất cả sản phẩm' />

            <section className="bodywrap">
                <div className="main__body">
                    <div className="main__body--contents">
                        <div className="container">
                            {/* Header contents */}
                            <div className="main__body--contents-top d-flex align-items-center justify-content-between">
                                <div className="colection--category">
                                    <nav className="category_collection--items">
                                        <ul className="header__items--list nav d-flex justify-content-start align-items-center">
                                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">DANH MỤC SẢN PHẨM</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Trang chủ</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Giới thiệu</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Sản phẩm</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Liên hệ</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Tin tức</a></li>
                                            </ul>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="colection--sort-by">
                                    <div className="dropdown">
                                        <span> Sắp xếp: </span>
                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Mặc định
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">A <i className="fa-solid fa-arrow-right" /> Z</a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Z <i className="fa-solid fa-arrow-right" /> A</a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Giá tăng dần</a></li>
                                            <li><a className="dropdown-item" href="#">Giá giảm dần</a></li>
                                            <li><a className="dropdown-item" href="#">Hàng mới nhất</a></li>
                                            <li><a className="dropdown-item" href="#">Hàng cũ nhất</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Product list */}
                            <div className="main__body--contents-products">
                                <div className="row" id="productCard">
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa tắm dove" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-da5efbe5-c9c6-46e3-a19b-c66b5c566971.jpg?v=1657707796000" alt="Sữa tắm dove" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={1} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa tắm dove">Sữa tắm Dove</a></h3>
                                            <div className="price-box"> <strong>150.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa tắm purité" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/5-jpeg-4298c8de-60bf-46ba-a1a4-78eb7df3e047.jpg?v=1657707688000" alt="Sữa tắm purité" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={2} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa tắm purité">Sữa tắm Purité</a></h3>
                                            <div className="price-box"> <strong>200.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa tắm pharmacity" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-e4f13416-93d1-4d5c-b7a9-5ae454ef4d9d.jpg?v=1657707526000" alt="Sữa tắm pharmacity" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={3} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa tắm pharmacity">Sữa tắm Pharmacity</a></h3>
                                            <div className="price-box"> <strong>150.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa tắm st.ives" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-9c9951ce-445d-42c7-9d57-a9596ec97336.jpg?v=1657707111000" alt="Sữa tắm st.ives" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={4} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa tắm st.ives">Sữa tắm ST.Ives</a></h3>
                                            <div className="price-box"> <strong>110.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa tắm love beauty & planet" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/5-jpeg-40a9699c-5ca8-4231-8ff5-4d60e4917b72.jpg?v=1657707031000" alt="Sữa tắm love beauty & planet" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={5} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa tắm love beauty & planet">Sữa tắm LOVE BEAUTY &amp; PLANET</a></h3>
                                            <div className="price-box"> <strong>150.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa rửa mặt senka" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/5-jpeg-de46ebbc-476e-4642-b635-c1fe250d6fcd.jpg?v=1657706907000" alt="Sữa rửa mặt senka" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={6} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa rửa mặt senka">Sữa rửa mặt Senka</a></h3>
                                            <div className="price-box"> <strong>80.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa rửa mặt hazeline" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-c5582b5e-e1a6-45a4-90e6-90063370021b.jpg?v=1657706759000" alt="Sữa rửa mặt hazeline" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={7} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa rửa mặt hazeline">Sữa rửa mặt Hazeline</a></h3>
                                            <div className="price-box"> <strong>55.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa rửa mặt hatomuzi" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-1ecf7f6c-428e-4b09-a57c-8ed072188b73.jpg?v=1657706673000" alt="Sữa rửa mặt hatomuzi" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={8} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa rửa mặt hatomuzi">Sữa rửa mặt Hatomuzi</a></h3>
                                            <div className="price-box"> <strong>95.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa rửa mặt rice milk" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-c6697a74-c45c-4b65-8ceb-743294c1ba3a.jpg?v=1657706562000" alt="Sữa rửa mặt rice milk" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={9} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa rửa mặt rice milk">Sữa rửa mặt Rice milk</a></h3>
                                            <div className="price-box"> <strong>75.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa rửa mặt eucerin" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/4-jpeg-a7e3fb2d-d7f4-4384-a401-56e248d580d4.jpg?v=1657706444000" alt="Sữa rửa mặt eucerin" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={10} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa rửa mặt eucerin">Sữa rửa mặt Eucerin</a></h3>
                                            <div className="price-box"> <strong>55.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Sữa rửa mặt clinic" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-caea9330-39c7-4c8d-aa9e-1c1c5e4118b9.jpg?v=1657706298000" alt="Sữa rửa mặt clinic" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={11} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Sữa rửa mặt clinic">Sữa rửa mặt Clinic</a></h3>
                                            <div className="price-box"> <strong>65.000đ</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 productItem">
                                        <div className="product--thumnail">
                                            <a className="image_thumb scale_hover" href="#" title="Kem dưỡng da v7 toning light" style={{ height: 272 }}>
                                                <img src="//bizweb.dktcdn.net/thumb/large/100/459/658/products/4-jpeg-8f345d84-332c-423c-a8cb-6b2a997b0c49.jpg?v=1658809804000" alt="Kem dưỡng da v7 toning light" data-was-processed="true" style={{ objectFit: 'fill' }} />
                                            </a>
                                            <div className="action">
                                                <button className="btn-proceed-checkout">Mua ngay</button>
                                                <button data-id={12} className="btn-cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                                                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product--information">
                                            <h3 className="product-name"><a href="#" title="Kem dưỡng da v7 toning light">Kem dưỡng da  V7 Toning Light</a></h3>
                                            <div className="price-box"> <strong>80.000đ</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
                <div className="pagenav ">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item active mx-1"><a className="page-link" href="#">1</a></li>
                            <li className="page-item mx-1"><a className="page-link" href="#">2</a></li>
                            <li className="page-item mx-1"><a className="page-link" href="#">3</a></li>
                            <li className="page-item mx-1">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section >

            <Footer />
        </>
    )
}

export default ProductPage