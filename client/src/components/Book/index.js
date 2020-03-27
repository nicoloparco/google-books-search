import React from 'react';

const Book = () => (
    <div className="container bg-light text-primary pb-3">
        <h5 className="font-italic">Title of Book</h5>
        <p className="font-weight-bold">Author of Book</p>
        <div className="row">
            <div className="col-md-4">
                <img className="img-fluid thumbnail bookImg border border-primary rounded-lg" src="https://thumbs-prod.si-cdn.com/ufPRE9RHUDHqQdOsLvYHhJAxy1k=/fit-in/1600x0/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg" alt="book"></img>
            </div>
            <div className="col-md-6 text-right">
                <button type="button" className="btn btn-primary rounded-lg mb-3">Save</button>
                <p>Summary of Book</p>
            </div>
        </div>
    </div>
)

export default Book;