const express = require('express')
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const url = 'mongodb+srv://kimhs:gus10298@boilerplate.m6b1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; /* path of your db */;

//to connect or create our database
mongoose.connect(url, { useUnifiedTopology : true, useNewUrlParser : true , }).then(() => {
   console.log("Connection successfull");
}).catch((e) => console.log(e))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})