import React from 'react'
import '../../generalStyle.css'
import './style.css'

function Footer() {
      return (
<div className="footer">
        <ul className="nav">
            <li className="pt1">
                <h3>Company</h3>

                <a href="#">Home</a> <br />
                <a href="#">About Us</a> <br />
                <a href="#">Producs</a> <br />
                <a href="#">Services</a> <br />
                <a href="#">Contact</a>
            </li>
            <li className="pt1">
                <h3>More</h3>

                <a href="#">Terms & Condition</a> <br />
                <a href="#">Privacy</a> <br />
                <a href="#">Advertise</a> <br />
            </li>
            <li className="pt1">
                <h3>Our partner</h3>

                <a href="#">BOSCH</a> <br />
                <a href="#">Monarch Diesel</a> <br />
                <a href="#">Delphi</a>
            </li>
            <li className="pt1">
                <h3>Contact</h3>

                <a href="#">351 street Franklin, MA 02038</a> <br />
                
                <a href="tel:+38970600370"><i className="fas fa-phone fa-rotate-90" style={{paddingTop:"5px"}}></i>  070 600 370</a> <br />
                
                <h3>Social Media</h3>

                <div>
                    <a href="https://facebook.com" target="_blank" className="footerIcons"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" className="footerIcons"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" className="footerIcons"><i className="fab fa-instagram"></i></a>
                </div>

            </li>
        </ul>
</div>
      )
  }


export default Footer;