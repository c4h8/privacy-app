import  React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [linkState, setLinkState] = useState(false);

  if (email !== '' && password !== '' && linkState !== true) {
    setLinkState(true)
  }

console.log(linkState)

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <div className="account-wall"><form className="form-signin">
                    <img className="profile-img" src={require("./google_avatar.png")}
                    alt=""/>
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        { linkState ? (
                            <Link to="/">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        </Link>
                        ) : (
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        )}   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;