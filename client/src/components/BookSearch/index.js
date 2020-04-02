import React, { useState } from "react";
import Book from "../Book"

const BookSearch = () => {

    const [bookName, setBookName] = useState("")
    const [booksList, setBooksList] = useState([])

    const apiKey = "AIzaSyCcpA1gm-lTcXFeF_11WjABqeYYQD_cDfI"
    const fetchUrl = "https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&key=" + apiKey

    const searchBook = () => (
        fetch(fetchUrl, { method: "GET"}).then(res => res.json()).then(
            (result) => {
                setBooksList(result.items)
            }
        )
    )

    return(
        <div className="container mt-3 bg-primary text-light rounded-lg shadow-lg">
            <div className="py-3">
                <h5>Search for Books:</h5>
                <input value={bookName} type="text" placeholder="Enter book name here" style={{width: "100%"}} onChange={(event) => setBookName(event.target.value)}></input>
                <button className="btn btn-outline-primary bg-light mt-3" onClick={(event) => searchBook()}>Search</button>
                <h5 className="mt-3">Results</h5>
                <div className="mt-3 text-light rounded-lg">
                    {booksList.map((item, key) => (
                        <Book key={key} title={item.volumeInfo.title} author={item.volumeInfo.authors} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "No Image"} summary={item.volumeInfo.description ? item.volumeInfo.description.slice(0, 450) + "..." : "No summary available"} />
                    ))}
                </div>
            </div>
        </div>
    )
    }

export default BookSearch;