const mongoose = require("mongoose");

const Schema = mongoose.Schema

const SavedBookSchema = new Schema({
    title: String,
    summmary: String,
    imageURL: String
});

const SavedBook = mongoose.model("SavedBook", SavedBookSchema);

export default SavedBook;