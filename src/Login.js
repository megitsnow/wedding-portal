import React from 'react';
import { Link } from 'react-router-dom';



function LogIn( {handleChange, handleSubmit, logInData}) {

    return (
    <div >
        <div className = "form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input className = "input-fields"
                        type="email" 
                        placeholder="Email address"
                        name="email"
                        onChange={handleChange}
                        value={logInData.email}
                    />
                </div>
                <div>
                    <input className = "input-fields"
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={logInData.password}
                    /> 
                </div>
                <div className = "sign-up-link">
                    <Link to="/sign-up">Not A User? Sign Up</Link>
                </div>
                <div>
                    <button className = "log-in-button">Log In</button>
                </div>
            </form>
        </div>
    </div>
    );
    }

export default LogIn;