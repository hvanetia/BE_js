import express from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.get("/health", (req, res) => {
    console.log("hello")
    res.status(200).json({
        success:true,
        message:"Hello World"
    })
})

app.listen(process.env.PORT, () => {
    console.log("listening on 3000")
})