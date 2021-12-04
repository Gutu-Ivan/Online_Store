import React from 'react'

const NotFound = () => {
    const showNotFound = () => (
        <div className="grid-block main-content wrap regular-padding" style={{ marginTop: 200 }}>
            <div className="grid-content small-12">
                <div className="text-center">
                    <h3>404 page not found</h3>
                    <p>This page does not exist.</p>
                </div>
            </div>
        </div>
    );

    return <div>{showNotFound()}</div>
};

export default NotFound;