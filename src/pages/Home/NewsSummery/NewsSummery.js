import React from 'react';
import { Link } from 'react-router-dom';

const NewsSummery = (props) => {
    const {img, title, description} = props.news;
    return (
        <div className="row row-cols-1 g-4 p-2">
            <div className="col img-scale-main">
                <div className="card h-100 pb-3">
                    <div className="img-scale">
                        <img src={img} className="card-img-top w-100" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div className="text-muted">
                            <p className="card-text d-inline"><small>{description}</small></p> &nbsp;
                            <Link to="/news" className="text-decoration-underline" style={{color: '#ff7f47'}}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSummery;