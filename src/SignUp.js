import React from 'react';

function SignUpForm({handleSignUpChange, handleSignUpSubmit, formData}) {
    
    return (
        <div>
        <div>
        <form onSubmit={handleSignUpSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder="First Name"
                    name="fname"
                    onChange={handleSignUpChange}
                    value={formData.fname}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Last Name"
                    name="lname"
                    onChange={handleSignUpChange}
                    value={formData.lname}
                />
            </div>
            <div>
                <input 
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    onChange={handleSignUpChange}
                    value={formData.email}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleSignUpChange}
                    value={formData.password}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="passwordConfirm"
                    onChange={handleSignUpChange}
                    value={formData.passwordConfirm}
                />
            </div>
            <div>
                <button>
                    Sign up
                </button>
            </div>
        </form>
        </div>
    </div>
    );
    }

export default SignUpForm;