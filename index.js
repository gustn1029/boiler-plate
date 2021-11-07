const express = require('express')
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const {User} = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form-urlencoded 갖고오기

app.use(bodyParser.json()); //application-json 가져오기

//to connect or create our database
mongoose.connect(config.mongoURI, { useUnifiedTopology : true, useNewUrlParser : true , }).then(() => {
   console.log("Connection successfull");
}).catch((e) => console.log(e))


app.get('/', (req, res) => {
  res.send('Hello World!!!!!')
})

app.post('/register', (req, res) => {

    // 회원가입할 때 필요한 정보들을 client 에서 가져오면 그것들을 DB에 넣어준다.
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            sucess: true
        });
    }); //mongoDB data save
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})