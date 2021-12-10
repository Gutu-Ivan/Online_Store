import React, { useEffect, useState }   from 'react';
import { Link, useHistory }            from 'react-router-dom';
import { equals, isEmail, isEmpty }     from 'validator';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading }                  from "../helpers/loading";
import { signup }                       from '../API/auth';
import { isAuthenticated }              from "../helpers/auth";
import '../assets/css/Main.css'

const Signup = () => {
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    const { username, email, password1, password2, successMsg, errorMsg, loading } = formData;

    const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: ''
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
        } else if (!isEmail(email)) {
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
            const { username, email, password1 } = formData
            const data = { username, email, password1 };
            setFormData({ ...formData, loading: true });

            signup(data)
                .then(response => {
                    console.log('Axios signup success', response);
                    setFormData({
                        username: '',
                        email: '',
                        password1: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage
                    });
                })
                .catch(err => {
                    console.log('Axios signup error', err);
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: err.response.data.errorMessage
                    })
                })
        }
    }

    const showSignupForm = () => (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                <form method="POST" className="needs-validation" noValidate="" onSubmit={ handleSubmit }
                                      autoComplete="off">

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="username">
                                            Name
                                        </label>
                                        <input id="username"
                                               type="text"
                                               className="form-control"
                                               name="username"
                                               value={ username }
                                               autoFocus
                                               onChange={ handleChange }>
                                        </input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">
                                            E-Mail Address
                                        </label>
                                        <input id="email"
                                               className="form-control"
                                               name="email"
                                               value={ email }
                                               onChange={ handleChange }>
                                        </input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password1">
                                            Password
                                        </label>
                                        <input id="password1"
                                               type="password"
                                               className="form-control"
                                               name="password1"
                                               value={ password1 }
                                               onChange={ handleChange }>
                                        </input>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password2">
                                            Confirm Password
                                        </label>
                                        <input id="password2"
                                               type="password"
                                               className="form-control"
                                               name="password2"
                                               value={ password2 }
                                               onChange={ handleChange }>
                                        </input>
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
                                                By registering you agree with our terms and condition.
                                            </label>
                                        </div>
                                        <div className="align-items-center d-flex">
                                            <button type="submit" className="btn btn-dark ms-auto">
                                                Register
                                            </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Already have an account?
                                    <Link to="/signin" className="text-white">
                                        Login
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
                { successMsg && showSuccessMsg(successMsg) }
                { errorMsg && showErrorMsg(errorMsg) }
            </div>
            { loading && showLoading() }
            { showSignupForm() }
        </div>
    )
};

export default Signup;

