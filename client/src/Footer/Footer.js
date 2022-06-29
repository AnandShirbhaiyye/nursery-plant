import React from 'react';
import './Footer.css';
import Logo3 from './img/logo3.png';

export default function Footer() {
  return (
    <div>
         <footer>
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Logo3} className="footer-logo" alt=''/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        We are here to inspire a world where every plant journey is a personal revolution of inner change and growth.
                    </div>
                    <div className="col-md-3">
                        <h4>Features</h4>
                        <p>Deals & Offers</p>
                        <p>Customer Reviews</p>
                        <p>Customer Policy</p>
                    </div>
                    <div className="col-md-3">
                     <h4>Quick Contact</h4>
                     <p> <i className="fa fa-phone-square"></i>+91 123456789</p>
                     <p> <i className="fa fa-envelope"></i>hello@gmail.com9</p>
                     <p> <i className="fa fa-home"></i>NAGPUR, MAHARASHTRA , INDIA</p>
                    </div>
                    <div className="col-md-3">
                     <h4>Follow Us On</h4>
                     <p> <i className="fa fa-facebook-official"></i>Facebook</p>
                     <p> <i className="fa fa-youtube-play"></i>youtube</p>
                     <p> <i className="fa fa-twitter"></i>Twitter</p>
                    </div>
                </div> <hr/>
                <p className="copyright"> Made with<i className="fa fa-heart"></i>Thankyou So Much for visiting this
             website... </p>
                
            </div>
        </section>
        
    </footer>
    </div>
  )
}
