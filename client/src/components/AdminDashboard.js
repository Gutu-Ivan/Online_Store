import React from 'react';

const AdminDashboard = () => {
    const showHeader = () => (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='display-1'>Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
    return <section>{showHeader()}</section>
};

export default AdminDashboard;