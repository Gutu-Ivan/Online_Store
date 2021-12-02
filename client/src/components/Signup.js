import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {isEmpty, isEmail, equals} from 'validator';
import '../assets/css/Signup.css'

const Signup = () => {
    const[formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    const {username, email, password1, password2, successMsg, errorMsg, loading} = formData;

    const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
        });
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(formData)
        if (isEmpty(username) || isEmpty(email) || isEmpty(password1) || isEmpty(password2)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required'
            })
        } else if(!isEmail(email)){
            setFormData({
                ...formData,
                errorMsg: 'Invalid email'
            })
        } else if (!equals(password1, password2)) {
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match'
            })
        } else {
            setFormData({
                ...formData,
                errorMsg: 'No errors',
                successMsg: 'Successful'
            })
        }
    }

    const showSignupForm = () => (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="text-center my-5">
                            <img
                                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                                alt="logo"
                                width="100">
                            </img>
                        </div>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                <form method="POST" className="needs-validation" noValidate="" onSubmit={handleSubmit} autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="username">Name</label>
                                        <input
                                            id="username"
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={username}
                                            autoFocus
                                            onChange={handleChange}>

                                        </input>
                                        <div className="invalid-feedback">
                                            Name is required
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                        <input id="email"
                                               className="form-control"
                                               name="email"
                                               value={email}
                                               onChange={handleChange}>

                                        </input>
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password1">Password</label>
                                        <input id="password1"
                                               type="password"
                                               className="form-control"
                                               name="password1"
                                               value={password1}
                                               onChange={handleChange}>

                                        </input>
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password2">Confirm Password</label>
                                        <input id="password2"
                                               type="password"
                                               className="form-control"
                                               name="password2"
                                               value={password2}
                                               onChange={handleChange}>
                                        </input>
                                        <div className="invalid-feedback">
                                            Confirm password
                                        </div>
                                    </div>

                                    <p className="form-text text-muted mb-3">
                                        By registering you agree with our terms and condition.
                                    </p>

                                    <div className="align-items-center d-flex">
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Already have an account?
                                    <Link to="/signin" className="text-dark">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2017-2021 &mdash; Your Company
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return (
        <div className="signup-container">
            {showSignupForm()}
            {JSON.stringify(formData)}
        </div>
    )
};

export default Signup;

