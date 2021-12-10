import React, { useState, useEffect }                    from 'react';
import { Link, useHistory }                  from 'react-router-dom';
import { isEmail, isEmpty }                   from "validator";
import { signin }                             from "../API/auth";
import { showErrorMsg }                       from "../helpers/message";
import { showLoading }                        from "../helpers/loading";
import { isAuthenticated, setAuthentication } from '../helpers/auth';
import '../assets/css/Main.css';

const Signin = () => {
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        errorMsg: false,
        loading: false
    });
    const { email, password1, errorMsg, loading } = formData;

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: ''
        });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isEmpty(email) || isEmpty(password1)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        } else {
            const { email, password1 } = formData
            const data = { email, password1 };
            setFormData({ ...formData, loading: true });

            signin(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user);

                    if (isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('Redirecting to admin dashboard');
                        history.push('/admin/dashboard');
                    } else {
                        console.log('Redirecting to user dashboard');
                        history.push('/user/dashboard');
                    }
                })
                .catch(err => {
                    console.log('Signin API function error: ', err)
                })
        }
    }

    const showSigninForm = () => (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                <form method="POST" className="needs-validation" noValidate="" onSubmit={ handleSubmit }
                                      autoComplete="off">

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">
                                            E-Mail Address
                                        </label>
                                        <input id="email"
                                               type="email"
                                               className="form-control"
                                               name="email"
                                               autoFocus
                                               onChange={ handleChange }>
                                        </input>
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password1">
                                                Password
                                            </label>
                                            <Link to="/forgot-password" className="float-end">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password1"
                                            onChange={ handleChange }>
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
                                        <button type="submit" className="btn btn-dark ms-auto">
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
                { errorMsg && showErrorMsg(errorMsg) }
            </div>
            { loading && showLoading() }
            { showSigninForm() }
        </div>
    )
};

export default Signin;