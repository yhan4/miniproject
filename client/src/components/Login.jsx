import React from "react";

const Login = () => {
    return(
        <div>
            <form>
                <label>
                    Username: <input type="text" />
                </label>
                <label>
                    Password: <input type="password" />
                </label>
                <button>Login</button>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Login;