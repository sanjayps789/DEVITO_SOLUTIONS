import React from 'react'

function Footer() {
  return (
   <footer style={{backgroundColor:'#76A6E6'}} className=' text-white  w-100 py-5'>
    <div className="container">
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-lg-3 mb-5">
          <h3 className='mb-4 fw-bold'>
            DEVITO 
            </h3>
          <p>Turn your ideas into reality,<br />
          Connect , create and thrive with us !</p>
          <div className='d-flex gap-4'>
            <i  className="fa-brands fa-square-facebook fs-3"></i>
            <i  className="fa-brands fa-square-instagram fs-3"></i>
            <i  className="fa-brands fa-square-twitter fs-3"></i>
            <i  className="fa-brands fa-linkedin fs-3"></i>
          </div>
        </div>
        <div className="col-lg-3 mb-3 ">
          <ul className='d-flex w-100 align-content-start justify-items-center gap-2 flex-column list-unstyled'>
            <li className='mb-3 fw-bold'>Company</li>
            <li >Projects </li>
            <li >Technology</li>
            <li >About </li>
            <li >Careers</li>
          </ul>
         
        </div>
        <div className="col-lg-3 mb-3">
          <ul className='d-flex gap-2 flex-column list-unstyled'>
          <li className='mb-3 fw-bold'>Contact us</li>
            <a href="tel:+91-7012758067" style={{color:'white',textDecoration:'none'}}> <i className="fa-solid fa-phone me-2"></i>+91-7012758067</a>
            <a href="tel:+91-9633161184" style={{color:'white',textDecoration:'none'}}> <i className="fa-solid fa-phone me-2"></i>+91-9633161184</a>
            <li style={{color:'white'}}> <i className="fa-solid fa-envelope me-2"></i> devito@gmail.com</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
              <ul className='d-flex gap-2 flex-column list-unstyled'>
              <li className='mb-3 fw-bold'>Legal</li>
                <li >Terms & Conditions</li>
                <li >Privacy Policy</li>
              </ul>
        </div>
      </div>
      <hr className="border-light my-4" />
        <div  className="text-center  text-light  fw-100 fst-italic">
          &copy; {new Date().getFullYear()}  Devito Solutions. All rights reserved.
        </div>
    </div>
   </footer>
  )
}

export default Footer