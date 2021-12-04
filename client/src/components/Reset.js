import React from 'react';

const Reset = () => {
    const resetPassword = () => (
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
                                <h1 className="fs-4 card-title fw-bold mb-4">Reset Password</h1>
                                <form method="POST"
                                      className="needs-validation"
                                      noValidate=""
                                      autoComplete="off">

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password">
                                            New Password
                                        </label>
                                        <input id="password"
                                               type="password"
                                               className="form-control"
                                               name="password"
                                               value=""
                                               autoFocus>
                                        </input>
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password-confirm">
                                            Confirm Password
                                        </label>
                                        <input id="password-confirm"
                                               type="password"
                                               className="form-control"
                                               name="password_confirm">
                                        </input>
                                        <div className="invalid-feedback">
                                            Please confirm your new password
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return <div>{resetPassword()}</div>
}

export default Reset;