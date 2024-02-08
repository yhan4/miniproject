import React from "react";

const Login = () => {
    return(
        <div className="container">
            <form>
                <label>
                    Username: <input type="text" />
                </label>
                <label>
                    Password: <input type="password" />
                </label>
                <div className="button-container">
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
                
            </form>
        </div>
    )
}

export default Login;