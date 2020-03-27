import React from "react";

const BookSearch = () => (
    <div className="container mt-3 bg-primary text-light rounded-lg shadow-lg">
        <div className="py-3">
            <h5>Search for Books:</h5>
            <input type="text" placeholder="Enter book name here" style={{width: "100%"}}></input>
        </div>
    </div>
)

export default BookSearch;