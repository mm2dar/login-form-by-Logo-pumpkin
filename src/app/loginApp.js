import React from 'react'
import { useState , useEffect } from 'react';
import "./loginApp.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


export default function LoginApp() {

    ///////////////////// data center

    let [EmailLogin, setEmailLogin] = useState('') 
    let [PasswordLogin , setPasswordLogin] = useState('') 

    let [EmailRegister, setEmailRegister] = useState('')
    let [PasswordRegister , setPasswordRegister] = useState('') 
    let [ConfirmPassword , setConfirmPassword] = useState('') 

    ///////////////////// data center
    ///////////////////// js script login
    let emailRegex = /(\-?[a-zA-Z0-9])*@gmail.[a-z]{2,4}/g
    let inputeEmailLogin = document.querySelector('#inputeEmailIDLogin')
    let inputePasswordLogin = document.querySelector('#inputePasswordIDLogin')
    let inputeEmailRegister = document.querySelector('#inputeEmailIDRegister')
    let inputePasswordRegister = document.querySelector('#inputePasswordIDRegister')
    let inputePasswordConfirmRegister = document.querySelector('#inputeinputeconfiremIDRegister')

        useEffect(()=>{         
            if (inputeEmailLogin) {
                if (emailRegex.test(EmailLogin)===true) {
                    inputeEmailLogin.style.color = 'green'
                }else{
                    inputeEmailLogin.style.color = 'red'
                }
              } else {
                console.error('Element with id "myElement" not found');
              }
        },[EmailLogin])
        useEffect(()=>{         
            if (inputeEmailRegister) {
                if (emailRegex.test(EmailRegister)===true) {
                    inputeEmailRegister.style.color = 'green'
                }else{
                    inputeEmailRegister.style.color = 'red'
                }
              } else {
                console.error('Element with id "myElement" not found');
              }
        },[EmailRegister])
        useEffect(()=>{         
            if (inputePasswordLogin) {
                if (PasswordLogin==='') {
                    inputePasswordRegister.style.color = 'red'
                }else if(PasswordLogin.length<=8){
                    inputePasswordLogin.style.color = 'red'
                }else{
                    inputePasswordLogin.style.color = 'green'
                }
              } else {
                console.error('Element with id "myElement" not found');
              }
        },[PasswordLogin])
        useEffect(()=>{    
            if (inputePasswordRegister) {
                if (PasswordRegister==='') {
                    inputePasswordRegister.style.color = 'red'
                }else if(PasswordRegister.length<=8){
                    inputePasswordRegister.style.color = 'red'
                }else{
                    inputePasswordRegister.style.color = 'green'

                }
              } else {
                console.error('Element with id "myElement" not found');
              }
        },[PasswordRegister])
        useEffect(()=>{  
            if (inputePasswordConfirmRegister) {
                    if (PasswordRegister==ConfirmPassword) {
                        if (PasswordRegister.length>8) {
                            inputePasswordConfirmRegister.style.color = 'green'
                            inputePasswordRegister.style.color = 'green'
                            inputePasswordRegister.style.textShadow = 'none'
                        }

                    }else{
                            inputePasswordRegister.style.textShadow = ' 0 0 2px red'
                            inputePasswordRegister.style.color = 'red'

                        inputePasswordConfirmRegister.style.color = 'red'

                    }
            } else {
              console.error('Element with id "myElement" not found');
            }

        },[ConfirmPassword])

    ///////////////////// js scriptlogin


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
    <div className='ParentLogin'>
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
                    <input autocomplete="off" type="text" value={EmailLogin} onChange={(event)=>setEmailLogin(event.target.value)} id='inputeEmailIDLogin' className='inputeEmail' placeholder='email' />
                    <input autocomplete="off" type="text" value={PasswordLogin} onChange={(event)=>setPasswordLogin(event.target.value)} maxLength={13} id='inputePasswordIDLogin' className='inputePassword' placeholder='password'/>
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
                    <input autocomplete="off" type="text" value={EmailRegister} onChange={(event)=>setEmailRegister(event.target.value)} id='inputeEmailIDRegister' className='inputeEmail' placeholder='email' />
                    <input autocomplete="off" type="text" value={PasswordRegister} onChange={(event)=>setPasswordRegister(event.target.value)} id='inputePasswordIDRegister' className='inputePassword' placeholder='password'/>
                    <input autocomplete="off" type="text" value={ConfirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} id='inputeinputeconfiremIDRegister' className='inputeconfirem' placeholder='confirem password'/>
                </div>
                <div className='btn-forgotPassword'>
                    <button className='btnLogin1'>Register</button>
                </div>
            </div>
        {/* //////two by two////// */}
        </div>
    </div>
  )
}
