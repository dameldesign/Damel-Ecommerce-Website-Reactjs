import React from "react"
import {BiLogoFacebookSquare }from "react-icons/bi";
import {GrTwitter} from "react-icons/gr";
import {AiFillInstagram} from "react-icons/ai";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head md:none'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +2348078058057</label>
            <label> +2348099988057</label>
            <i className='fa fa-envelope'></i>
            <a href="mailto:"> </a>
            <label> enquiries@wstreams.com</label>
          </div>
          <div className=' items-center justify-between p-2'>
            <label> < BiLogoFacebookSquare size={18}/></label>
            <label> < GrTwitter size={18}/></label>
            <label> < AiFillInstagram size={18}/></label>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
