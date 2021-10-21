import React from 'react'
import './Home.css'
import { GiMeat, GiHamburger } from 'react-icons/gi';
import { FaFish, FaHandPointLeft, FaHandPointRight, FaPizzaSlice } from "react-icons/fa";
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div>
            <div className="container">
                <div className="row head mt-5">
                    <div className="col-12 col-md-6">
                        <h1 className="head-h">Welcom In Resto</h1>
                        <p className="head-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="imge" src='/images/head.jpg' alt="..." />
                    </div>
                </div>


                <div className="service">
                    <h2 className="ser-h text-center"><span>O</span>ur <span>S</span>ervices</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <h2 className="text-center icon"><GiMeat /></h2>
                                <h4 className="ser-head text-center mt-3">Good Meat</h4>
                                <p className="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <h2 className="text-center icon"><FaFish /></h2>
                                <h4 className="ser-head text-center mt-3">Good Fish</h4>
                                <p className="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <h2 className="text-center icon"><GiHamburger /></h2>
                                <h4 className="ser-head text-center mt-3">Good Burger</h4>
                                <p className="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <h2 className="text-center icon"><FaPizzaSlice /></h2>
                                <h4 className="ser-head text-center mt-3">Good Pizza</h4>
                                <p className="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 adv">
                <h1 className="text-center"><FaHandPointRight className="me-4" />Welcom In Resto<FaHandPointLeft className="ms-4" /></h1>
            </div>

            <div className="container">
                <div className="fav">
                    <h2 className="fav-h text-center"><span>F</span>avourite <span>F</span>ood</h2>
                    <div className="fav-b mt-5 text-center">

                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">

                                <div className="card">
                                    <img src="/images/meat.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Beef</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <img src="/images/fish.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Fish</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <img src="/images/burger.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Burger</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card">
                                    <img src="/images/pizza.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Pizza</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/menu" className="btn mt-5 mb-5">Go To Menu</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
