import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb"


const PORT = process.env.PORT || 8080
const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const withDB = async (operations) => {

    const client = await MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true});
    const db = client.db("googleBooks")

    await operations(db)

    client.close();
}

app.get("/api/savedBooks/", async(req, res) => {

    withDB(async (db) => {
        
        await db.collection("savedBooks").find({}).toArray(function(err, docs){
            res.json(docs)
        })

    }, res).catch(err => (
        res.json(err)
    ))
});

app.post("/api/savedBooks/", async(req, res) => {


    const {title, summary, imageURL} = req.body

    withDB(async (db) => {

        await db.collection("savedBooks").insertOne({
            title: title,
            summary: summary,
            imageURL: imageURL
        })

        await db.collection("savedBooks").find({}).toArray(function(err, docs){
            res.json(docs)
        })
    }).catch(err => {
        res.json(err)
    })
});

app.listen(PORT, () => console.log("Listening on Port 8080"))