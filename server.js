import express from "express";
import bodyParser from "body-parser";
import path from "path"

const PORT = process.env.PORT || 8080
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(PORT, () => console.log("Listening on Port 8080"))