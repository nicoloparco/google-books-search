import React from "react";
import Navbar from "../../components/Navbar";
import JumbotronSearch from "../../components/JumbotronSearch"
import BookSearch from "../../components/BookSearch"
import BookList from "../../components/BookList";

const SearchPage = () => (
    <>
    <Navbar />
    <JumbotronSearch />
    <BookSearch />
    <BookList />
    </>
)

export default SearchPage;