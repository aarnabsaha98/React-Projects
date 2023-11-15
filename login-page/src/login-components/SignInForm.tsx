/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import LoginForm from "./LoginForm";



function SignInForm() {

    const [page, setPage] = useState(false);
    const [title, setTitle] = useState('SignIn');


    const signInInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log("value :" + value);
    };
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("submit");
    };

    const toggleForm = () => {
        console.log('toggle');
        setPage(true);
        setTitle('LogIn');
    }

    return (
        <>
            <div className='form-pages'>
                {page == true ? <LoginForm  pageType={title} /> :
                <><div className="Title">
                        {title}
                        <hr />
                    </div><form onSubmit={handleSubmit}>
                            <div className="form-group">
                                {/* <label htmlFor="InputName">Name</label> */}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="InputName"
                                    aria-describedby="textHelp"
                                    placeholder="Enter Name"
                                    onChange={signInInputs} />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="InputEmail1">Email address</label> */}
                                <input
                                    type="email"
                                    className="form-control"
                                    id="InputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={signInInputs} />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="InputPassword1">Password</label> */}
                                <input
                                    type="password"
                                    className="form-control"
                                    id="InputPassword1"
                                    placeholder="Password"
                                    onChange={signInInputs} />
                            </div>
                            <p>
                                Already have an account?{" "}
                                <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
                                    Login
                                </span>
                            </p>
                            <button type="submit" className="buttons">Sign In</button>
                        </form></>
                }
            </div>

        </>
    );
}

export default SignInForm;
