const express = require('express')
const app = express()
const port=5000
const bodyParser = require('body-parser');

const config= require('./config/key');
const {User} = require("./models/User");


app.use(bodyParser.urlencoded({extended: true})); //application/x-www-from-urlencoded


app.use(bodyParser.json()); //application/json


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(()=> console.log('MongoDB Connected...'))
.catch(err =>console.log(err))



app.get('/',(req,res)=> res.send('Hello World!, hi'))


app.post('/register',(req,res)=>{

    //회원 가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err,userInfo)=> {
        if(err) return res.json({success: false, err}) //디비에 성공적 저장 실패
        return res.status(200).json({success: true}) //디비에 성공적 저장
    });

})
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))