import React from 'react';

const PageTitle = ({ title }) => {
    return (
        <div className="page-title">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="title-content">
                            <h2 className="title">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
