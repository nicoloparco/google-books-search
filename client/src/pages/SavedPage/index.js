import React from "react";
import Navbar from "../../components/Navbar"
import JumbotronSaved from "../../components/JumbotronSaved";
import SavedBooks from "../../components/SavedBooks"

const SavedPage = () => (
    <>
    <Navbar />
    <JumbotronSaved />
    <SavedBooks />
    </>
)

export default SavedPage;