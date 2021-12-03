import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/Signup.css'
import {showLoading} from "../helpers/loading";

const Signin = () => {
    const[formData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: true
    });

    const {loading} = formData;

    const showSigninForm = () => (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">

                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                <form method="POST"
                                      className="needs-validation"
                                      noValidate=""
                                      autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                        <input id="email"
                                               type="email"
                                               className="form-control"
                                               name="email"
                                               required
                                               autoFocus>
                                        </input>
                                            <div className="invalid-feedback">
                                                Email is invalid
                                            </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password">Password</label>
                                            <Link to="/forgot-password" className="float-end">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            required>
                                        </input>
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                                className="form-check-input">
                                            </input>
                                                <label htmlFor="remember" className="form-check-label">
                                                    Remember Me
                                                </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Don't have an account?
                                    <Link to="/signup" className="text-white">
                                        Create One
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    return (
        <div className="signup-container">
            <div className="my-5">
                {loading && showLoading()}
            </div>
            {showSigninForm()}
        </div>
    )
};

export default Signin;