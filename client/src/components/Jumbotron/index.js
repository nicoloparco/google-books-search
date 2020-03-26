import React from "react";

function Jumbotron() {
    return(
        <div className="container">
            <div className="jumbotron-fluid bg-primary rounded-lg mt-3 text-light text-center shadow">
                <h1 className="mb-3">Welcome to the Google Books Library App!</h1>
                <img className="rounded-lg shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Humfrey%27s_Library_Interior_6%2C_Bodleian_Library%2C_Oxford%2C_UK_-_Diliff.jpg/250px-Duke_Humfrey%27s_Library_Interior_6%2C_Bodleian_Library%2C_Oxford%2C_UK_-_Diliff.jpg" alt="Library"></img>
                <h5 className="my-3">Get ready to start exploring the wonderful world of reading</h5>
                <h5 className="pb-3">Don't forget to save any books you find interesting</h5>
            </div>
        </div>
    )
}

export default Jumbotron;