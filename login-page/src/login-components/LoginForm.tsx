
import React, { useState } from 'react';


interface Props {
    pageType: string;

}

function LoginForm({ pageType }: Props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logInInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('email ' + e.target.value);
        setEmail(e.target.value);
    };

    const logInInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('password ' + e.target.value);
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("logged in");
    };


    return (
        <>
            <div className="Title">
                {pageType}
                <hr />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={logInInputEmail} value={email} required />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={logInInputPassword} value={password} required />
                </div>
                <button type="submit" className="buttons">Login</button>
            </form>
        </>
    );

}
export default LoginForm
