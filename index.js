import express from "express";

const app = express();

app.get("/health", (req, res) => {
    console.log("hello")
    res.status(200).json({
        success:true,
        message:"Hello World"
    })
})

app.listen(3000, () => {
    console.log("listening on 3000")
})