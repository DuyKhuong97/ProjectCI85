import React from 'react'

import './Breadcrumb.scss'

const Breadcrumb = (props) => {

    return (
        <>
            <section className="main__body--breadcrumb">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="home mx-2">
                            <a href="/"><span>Trang chủ</span></a>
                        </li>
                        <span><i className="fa-solid fa-angle-right" /></span>
                        <li className="mx-2"><span>{props.menuItem}</span></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb