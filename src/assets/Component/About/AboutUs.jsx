import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdBorderColor } from 'react-icons/md';
import style from './about.module.css'

export default function AboutUs() {

      
    
  return (
    <div className={`p-5 ${style.styles}`}>
        <div className='d-flex justify-content-center align-items-center flex-column gap-5'>
            <h3>About</h3>
            <div className={`${style.about}`}>
                <p className={`${ style.paragraphStyle}`}>
                Iam a hardworking and ambitious computer science student at Birzeit University. I am passionate about making a meaningful impact on society.
                </p>
                
            </div>
            {/* <button className={`p-3 ${style.buttonStyle}`}><FaDownload size={25} color='white'></FaDownload>Free Download!</button> */}
        </div>
    </div>

  )
}
