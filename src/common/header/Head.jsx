import React from "react"
import {BiLogoFacebookSquare }from "react-icons/bi";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <label >

            <Link to='/'> 
            <BiLogoFacebookSquare className="text-white " size={26} />
            </Link>

            </label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
