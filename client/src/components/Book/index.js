import React from 'react';

const Book = (props) => (
    <div className="py-3">
    <div className="container bg-light text-primary rounded-lg shadow-lg">
        <h5 className="font-italic mt-3">{props.title}</h5>
        <p className="font-weight-bold">{props.author}</p>
        <div className="row py-3">
            <div className="col-md-4">
                <img className="img-fluid thumbnail bookImg border border-primary rounded-lg" src={props.image} alt={props.title}></img>
            </div>
            <div className="col-md-6 text-right">
                <button type="button" className="btn btn-primary rounded-lg mb-3">Save</button>
                <p>{props.summary}</p>
            </div>
        </div>
    </div>
    </div>
)

export default Book;