import React from 'react';

const Book = (props) => {

    const saveBook = () => (
        ""
    )

    return(
        <div className="py-3">
        <div className="container text-light rounded-lg shadow-lg">
            <h5 className="font-italic pt-3">{props.title}</h5>
            <p className="font-weight-bold">By: {props.author}</p>
            <div className="row py-3">
                <div className="col-md-4">
                    <img className="img-fluid thumbnail bookImg rounded-lg" src={props.image} alt={props.title}></img>
                </div>
                <div className="col-md-8 text-right mt-3">
                    <p>{props.summary}</p>
                    <button type="button" className="btn btn-outline-primary bg-light mt-3" onClick={() => saveBook()}>Save</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Book;