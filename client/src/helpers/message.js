import React from 'react';

export const showErrorMsg = (msg) => (
    <div className="alert alert-danger d-flex col-md-5 mx-auto align-items-center" style={ { marginTop: 10 } } role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlinkHref="#exclamation-triangle-fill"/>
        </svg>

        <div>
            { msg }
        </div>
    </div>
);
export const showSuccessMsg = (msg) => (
    <div className="alert alert-success d-flex col-md-5 mx-auto align-items-center" style={ { marginTop: 10 } } role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
            <use xlinkHref="#exclamation-triangle-fill"/>
        </svg>

        <div>
            { msg }
        </div>
    </div>
);