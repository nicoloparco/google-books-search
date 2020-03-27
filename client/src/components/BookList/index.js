import React from "react";
import Book from "../Book";

const BookList = () => (
    <div className="container mt-3 bg-primary text-light rounded-lg shadow-lg">
        <h5 className="py-3">Results</h5>
        <Book />
    </div>
)

export default BookList;