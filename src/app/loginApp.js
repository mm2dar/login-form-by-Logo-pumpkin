import React from 'react'
import "./loginApp.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


export default function loginApp() {

    let toggleFunction=(event)=>{
        
        let btnToggle = document.querySelector('#windowExternal')
        let btn = document.querySelector('.toggleDivMoverbtn')

        if (btnToggle.getAttribute('toggle') === 'left') {
                btnToggle.classList.remove('windowExternal-left')
                btnToggle.classList.add('windowExternal-right')
             btn.innerHTML='sign up'
            btnToggle.setAttribute('toggle' , 'right')
        } else if(btnToggle.getAttribute('toggle') === 'right'){
                btnToggle.classList.remove('windowExternal-right')
                btnToggle.classList.add('windowExternal-left')
             btn.innerHTML='sign in'
            btnToggle.setAttribute('toggle' , 'left')
        }


    }

  return (
    <form className='ParentLogin'>
        <div className='orgParentLogin'>
        {/* //////two by two////// */}
            <div className='windowExternal-left' id='windowExternal' toggle='left'>
                <img className='imgPumkin3' src="./imageP/pumkin.png" alt="" />
                <button onClick={event=>toggleFunction(event)} className='toggleDivMoverbtn'>Sign in</button>
            </div>
                <img className='imgPumkin1' src="./imageP/pumkin.png" alt="" />
                <img className='imgPumkin2' src="./imageP/pumkin.png" alt="" />

            <div className='loginDiv'>
                <h1 className='titlrLoginParent'>
                    <span className='spanTextBu'>Sign</span> in
                </h1>
                <div className='iconeSharedProgram'>
                    <a href="#" className="linkIcon"><div className='icoTtelegram'><FaTelegramPlane size={25}/></div></a>
                    <a href="#" className="linkIcon"><div className='iconGit'><FiGithub size={25}/></div></a>
                    <a href="#" className="linkIcon"><div className='iconWhatsapp'><FaWhatsapp size={25}/></div></a>
                </div>
                <div className='parentInputeLogin'>
                    <input type="text" className='inputeEmail' placeholder='email' />
                    <input type="text" className='inputePassword' placeholder='password'/>
                </div>
                <div className='btn-forgotPassword'>
                    <p className='forgotPass'>forget ypur password ?</p>
                    <button className='btnLogin'>login</button>
                </div>
            </div>
            <div className='registerDiv'>
            <h1 className='titlrLoginParent'>
                    <span className='spanTextBu'>Sign</span> up
                </h1>
                <div className='iconeSharedProgram'>
                    <a href="#" className="linkIcon"><div className='icoTtelegram'><FaTelegramPlane size={25}/></div></a>
                    <a href="#" className="linkIcon"><div className='iconGit'><FiGithub size={25}/></div></a>
                    <a href="#" className="linkIcon"><div className='iconWhatsapp'><FaWhatsapp size={25}/></div></a>
                </div>
                <div className='parentInputeLogin'>
                    <input type="text" className='inputeEmail' placeholder='email' />
                    <input type="text" className='inputePassword' placeholder='password'/>
                    <input type="text" className='inputeconfirem' placeholder='confirem password'/>
                </div>
                <div className='btn-forgotPassword'>
                    <button className='btnLogin1'>Register</button>
                </div>
            </div>
        {/* //////two by two////// */}
        </div>
    </form>
  )
}
