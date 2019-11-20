import  React from 'react';

function Login() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className="text-center login-title">
                        Sign in to continue to Bootsnipp
                    </h1>
                    <div className="account-wall">
                    <img className="profile-img" src={require("")} alt=""/>
                    <form className="form-signin">
                        <input type="password" className="form-control" placeholder="Password" required></input>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <label className="checkbox pull-left">
                            <input type="checkbox" value="remember-me"> Remember me</input>
                        </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;