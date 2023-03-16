import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../../generalStyle.css'
import './style.css'



function Header() {



    const [isActive, setIsActive] = useState("")

    function changeActive() {
        if(isActive === "" || !isActive || isActive === undefined){
            setIsActive("active")
        }
        else{
            setIsActive("")
        }
    }




      return (
          <div className='header'>
              <ul>
                <li className="firstLi">
                    <img src='/images/Logo.jpg' height={"60px"} />
                    {/* <h3><span className="logo">To</span>bi</h3> */}
                    <span id="openNav" className="menubut" onClick={changeActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </li>
                <li className={`secLi ${isActive}`}>
                    <ul className="navbar">
                        <li>
                            {/* <a className="link" href="#">Home</a> */}
                            <Link className='link' to="/" >Home</Link>
                        </li>
                        <li>
                            {/* <a className="link" href="#">Instagram Posts</a> */}
                            <Link className='link' to="/products" >Products</Link>

                        </li>
                        <li>
                            {/* <a className="link" href="#">Instagram Posts</a> */}
                            <Link className='link' to="/services" >Services</Link>

                        </li>
                        <li>
                            {/* <a className="link" href="#">About Us</a> */}
                            <Link className='link' to="/About" >About</Link>
                        </li>
                        <li>
                            {/* <a className="link" href="#">Contact</a> */}
                            <Link className='link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
      )
  }


export default Header;