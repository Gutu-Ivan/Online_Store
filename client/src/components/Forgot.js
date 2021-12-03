import React, {Suspense} from 'react';
import {Link} from "react-router-dom";

const Forgot = () => {
    const forgotPassword = () => (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="text-center my-5">
                            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                                 alt="logo"
                                 width="100">
                            </img>
                        </div>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Forgot Password</h1>
                                <form method="POST" className="needs-validation" noValidate="" autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                        <input
                                            id="email"
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

                                    <div className="d-flex align-items-center">
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Send Link
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Remember your password?
                                    <Link to="/signin" className="text-white">Login</Link>
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
    return <div>{forgotPassword()}</div>
    // return (
    //     <div>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <div>
    //                 {forgotPassword()}
    //             </div>
    //         </Suspense>
    //     </div>)
}

export default Forgot