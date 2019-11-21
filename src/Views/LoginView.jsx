import  React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Login({setGoogleLoggedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [linkState, setLinkState] = useState(false);

  const hasLoginData = (email !== '' && password !== '' && linkState !== true)

  const handelSubmit = (e) => {
    e.preventDefault()
    hasLoginData && setGoogleLoggedIn(true)
  }

  return(
    <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 ">
            <div className="account-wall"><form className="form-signin">
            <img className="profile-img" src={require("./google_avatar.png")}
            alt=""/>
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                  <button 
                    className="btn btn-lg btn-primary btn-block" type="submit"
                    onClick={handelSubmit}
                    disabled={!hasLoginData}
                  >
                    Sign in
                  </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;