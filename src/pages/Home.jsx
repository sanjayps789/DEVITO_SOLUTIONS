import React from 'react'
import Header from '../components/Header'
import img1 from '../assets/images/image.png'
import img2 from '../assets/images/image (1).png'
import img3 from '../assets/images/image (2).png'
import img4 from '../assets/images/image (3).png'
import img_sm1 from '../assets/images/img-sm-1.png'
import img_sm2 from '../assets/images/img-sm-2.png'
import img_sm3 from '../assets/images/img-sm-3.png'
import img_sm4 from '../assets/images/img-sm-4.png'
import apstore from '../assets/images/appstore.png'
import aws from '../assets/images/aws.png'
import docker from '../assets/images/docker.png'
import figma from '../assets/images/figma.png'
import flutter from '../assets/images/flutter.png'
import googleplay from '../assets/images/gogleplay.png'
import googlecloud from '../assets/images/googlecloud.png'
import hostinger from '../assets/images/hostinger.png'
import kubernetes from '../assets/images/kubernetes.png'
import mongoDb from '../assets/images/mongoDb.png'
import nodejs from '../assets/images/nodejs.png'
import react from '../assets/images/react.png'
import app from '../assets/images/image 11.png'
import android from '../assets/images/android.png'
import ios from '../assets/images/ios.png'
import web from '../assets/images/www.png'
import windows from '../assets/images/windows.png'
import './Home.css'

function Home() {
    return (
        <div className='w-100 pb-lg-0 pb-5'>
            <Header />
            <section style={{ height: '80vh' }} className='w-100  d-flex align-items-center justify-content-center bg-light'>
                <div className="container">
                    <div className="row d-flex  align-items-center">
                        <div className="col-lg-4">
                            <h1 style={{ color: '#A3DD99', fontSize: '61px' }} className='fw-bold'>Makes You
                                <br />
                                <span style={{ color: '#76A6E6', fontSize: '61px' }} className=' fw-bold'> Easy.</span>
                            </h1>
                            <p style={{ textAlign: 'justify' }} className='text-black'>
                                We deliver cutting-edge, cost effective solutions to rapidly build and deploy your websites and applications, tailored to your organization’s needs
                            </p>
                            <button style={{ backgroundColor: '#76A6E6', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className='btn text-white fw-bolder px-5 py-2 rounded-pill'>Get in touch!</button>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 ">
                            <div className=''>
                                <div className='d-none d-lg-flex  w-100 align-items-center justify-content-evenly'>
                                    <img src={img1} className='img-fluid' alt="image1" />
                                    <img src={img2} style={{ translate: '0px -50px' }} className='img-fluid' alt="image2" />
                                    <img src={img3} className='img-fluid' alt="image3" />
                                    <img src={img4} style={{ translate: '0px -50px' }} className='img-fluid' alt="image4" />
                                </div>

                                <div style={{ paddingTop: '100px' }} className='d-flex d-lg-none d-xl-none d-md-none w-100 align-items-center justify-content-evenly'>
                                    <img src={img_sm1} className='img-fluid' alt="image1" />
                                    <img src={img_sm2} style={{ translate: '0px -40px' }} className='img-fluid' alt="image2" />
                                    <img src={img_sm3} className='img-fluid' alt="image3" />
                                    <img src={img_sm4} style={{ translate: '0px -40px' }} className='img-fluid' alt="image4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* technologies */}
            <section  style={{ backgroundColor: '#76A6E6' }} className='w-100 d-flex align-items-center justify-content-center py-5'>
            <div className="container py-lg-5">
                <div className="row d-flex align-items-center justify-content-center ">
                    <div className="col-lg-3">
                        <h2 className='fw-bolder text-white text-center mb-3'>
                            Technologies
                            <br />
                            <span className='text-white fs-3'> we work with</span>
                        </h2>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        <div style={{ minHeight: "auto" }} className="bg-light w-100 rounded-4 py-4">
                            <div className="row d-flex flex-column gap-3 align-items-center justify-content-center w-100">
                            <div className='d-flex align-items-center justify-content-around w-100 '>
                                        <img  src={flutter} alt="flutter" className="img-fluid tech-images" />
                                        <img  src={mongoDb} alt="mongoDb" className="img-fluid tech-images" />
                                        <img  src={nodejs} alt="nodejs" className="img-fluid tech-images" />
                                        <img  src={aws} alt="aws" className="img-fluid tech-images pt-2" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-around w-100 '>
                                        <img src={googlecloud} alt="googlecloud" className="img-fluid tech-images" />
                                        <img src={figma} alt="figma" className="img-fluid tech-images" />
                                        <img src={hostinger} alt="hostinger" className="img-fluid tech-images" />
                                        <img src={react} alt="react" className="img-fluid tech-images pt-2" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-around w-100 '>
                                        <img src={kubernetes} alt="kubernetes" className=" img-fluid tech-images" />
                                        <img src={docker} alt="docker" className="img-fluid  tech-images" />
                                        <div className='d-flex flex-column align-items-center justify-content-center gap-1'>
                                            <img src={app} alt="app" className="img-fluid  tech-images" />
                                            <img src={apstore} style={{ width: '90px', height: '10px' }} alt="appstore" className="img-fluid  tech-images" />
                                        </div>
                                        <img src={googleplay} alt="googleplay" className="img-fluid  tech-images " />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <section style={{paddingBottom: '100px'}}  className='w-100  pb-lg-0 d-flex align-items-center justify-content-center'>
                <div className="container py-5">
                    <div style={{ borderColor: "#A3A3A3" }} className="row d-flex  border-bottom py-lg-5 py-3">
                        <div className="col-lg-3">
                            <h1 className='text-black fw-bold text-lg-start text-center '>We are a small <br  className='d-none d-lg-block'/>
                             team doing <br className='d-none d-lg-block' />
                                 <span style={{ color: '#25C20A' }}>cool stuff</span>.</h1>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-8 ">
                            <div className="d-flex align-items-center justify-content-center flex-column w-100">
                                <h6 className='py-lg-0 py-2'>We build applications for:</h6>
                                <div className="d-flex align-items-center justify-content-around w-100 py-3">
                                    <img src={android} alt="android" className="img-fluid" />
                                    <img src={ios} alt="ios" className="img-fluid" />
                                    <img src={web} alt="web" className="img-fluid" />
                                    <img src={windows} alt="windows" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center flex-column pt-4">
                            <h2 className='text-center text-black fw-bold pt-4 pb-3'>Let us know what your want!</h2>
                           <div className='text-center pb-lg-0 pb-5'> <button style={{ backgroundColor: '#76A6E6', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className='btn text-white fw-bolder px-5 py-2 rounded-pill'>Contact us!</button></div>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Home