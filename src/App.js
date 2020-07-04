import React, { useState } from 'react';
import styles from './SignupForm.module.css'

const SignUp = () => {

  const [fullName, setfullName] = useState('');
  //eslint-disable-next-line
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [phErr, setphErr] = useState('');
  //eslint-disable-next-line
  const [Email, setEmail] = useState('');
  const [emailErr, setemailErr] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [passErr, setpassErr] = useState('');

  const verification = () => {

    if (phErr === false && emailErr === false && passErr === false & fullName !== '') {
      return false
    } else {
      return true
    }
  }


  const PhoneChanged = (val) => {
    if (val === '') {
      setphErr(false)
    }
    else if (val.length !== 10 || /^[0-9]*$/.test(val) === false) {
      setphErr('Please Enter Valid Phone Number');
    } else {
      setphErr(false);
      setPhoneNumber(val);
    }
  }

  const EmailChanged = (val) => {
    if (val === '') {
      setemailErr(false)
    }
    //eslint-disable-next-line 
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) === false) {
      setemailErr('Please Enter Valid Email')
    } else {
      setEmail(val);
      setemailErr(false)
    }
  }

  const passwordChanged = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    if (name === 'p1') {
      if (confirmPassword !== '') {
        if (val !== confirmPassword) {
          setpassErr('Passwords should match');
        } else {
          setpassErr(false)
        }
      }
    } else {
      if (val !== Password) {
        setpassErr('Passwords should match')
      } else {
        setpassErr(false);
      }
    }

  }

  const send = (e) => {
    e.preventDefault();
    alert('Sucess! Your form has been received!')
  }


  return (
    <form>
      <div className={styles.all}>

        <div>
          <p>Name</p>
          <input placeholder="Full Name" onChange={(e) => setfullName(e.target.value)}></input>
        </div>
        <div>
          <p>Phone Number</p>
          <input placeholder="98.........." onChange={(e) => PhoneChanged(e.target.value)}></input>
          <p className={styles.Err}>{phErr}</p>
        </div>
        <div>
          <p>Email</p>
          <input onChange={(e) => EmailChanged(e.target.value)}></input>
          <p className={styles.Err}>{emailErr}</p>
        </div>
        <div>
          <p>Password</p>
          <input type="password" name="p1" onChange={
            (e) => {
              setPassword(e.target.value)
              passwordChanged(e);
            }
          }></input>
          <p className={styles.Err}>{passErr}</p>
        </div>
        <div>
          <p>Confirm Password</p>
          <input type="password" name="p2" onChange={
            (e) => {
              setconfirmPassword(e.target.value)
              passwordChanged(e);
            }
          }></input>
          <p className={styles.Err}>{passErr}</p>
        </div>
        <p className={styles.Submit}><button type='submit' disabled={verification()} onClick={send} >Send</button></p>

      </div>
    </form>



  )
}

export default SignUp
