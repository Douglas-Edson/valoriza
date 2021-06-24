import "reflect-metadata";
import express from 'express';
import "./database";

const app = express();

app.get("/test", (req, res) => {
   return res.send("Olá mundo!!!!")
})

app.post("/test-post", (req, res) => {
  return res.send("Olá Mundooooo!!")  
})

app.listen(3000, () => console.log("Server is running"));


