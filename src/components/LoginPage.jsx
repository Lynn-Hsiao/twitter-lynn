import React from 'react'
// import { Link } from 'react-router-dom';
import { AClogo } from '../assets/icons';
import './SharingStyle.scss'

function LoginPage() {
  return (
    <div className="formContainer">
      <div>
        <AClogo />
      </div>
      <h3>登入 Alphitter</h3>

      <div className="inputContainer">
        <div className="inputContent">
          <label className="inputLabel">帳號</label>
          <input className="inputField"
            label="帳號"
            placeholder="請輸入帳號"
            // value={username}
            // onChange={(nameInputValue) => setUsername(nameInputValue)}
          ></input>
        </div>
        <div className="inputNote">
          <div className="inputMessage">Message</div>
          <div className="inputCounter">0/50</div>
        </div>
      </div>

      <div className="inputContainer">
        <div className="inputContent">
          <label className="inputLabel">密碼</label>
          <input className="inputField"
            type="password"
            label="密碼"
            placeholder="請輸入密碼"
            // value={password}
            // onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          ></input>
        </div>
        <div className="inputNote">
          <div className="inputMessage">Error Message</div>
          <div className="inputCounter">20/50</div>
        </div>
      </div>
      {/* <button className="mainButton" onClick={handleClick}>登入</button> */}
      <button className="mainButton">登入</button>
      <div className="outerLink">
        <div className="linkText">註冊</div>
        .
        <div className="linkText">後台登入</div>
      </div>
    </div>
  )
}

export default LoginPage