const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const jwt =require('jsonwebtoken')
const express=require('express');
const app=express();

app.use(cookieParser());



app.get('/',(req,res)=>{
    // res.cookie("name","Vinit"); ->Setting a cookie 
     
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("ghanteKaKing", salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(hash);
//     });
// }); --> Encrypting password

        //Dcrypting the password
        // bcrypt.compare('ghanteKaKing', "$2b$10$KK2A16IbDcEkYmAs4Bpe7uXCbd1yNu2J0uW0v37kmH7HNIPR0XWGG", function(err, result) {
        //     console.log(result);
        // });  

        //Creating a token for cookie
        var token = jwt.sign({ email: 'VinitSingh.dev@gmail.com' }, 'secret');
        res.cookie("token",token);
        res.send("Done bro");
});

app.get("/read",(req,res)=>{
    //Reading a cookie
    // console.log(req.cookies);
    // res.send("Cookie reading");

    //Reading a token
    let data = jwt.verify(req.cookies.token, 'secret');
    console.log(data);
    res.send("reading token");
})

app.listen(3000);
// ghanteKaKing
// $2b$10$KK2A16IbDcEkYmAs4Bpe7uXCbd1yNu2J0uW0v37kmH7HNIPR0XWGG