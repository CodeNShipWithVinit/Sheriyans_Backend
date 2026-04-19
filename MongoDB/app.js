const express=require('express');
const app=express();

const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey")
})

app.get('/create',async (req,res)=>{
    let createdUser=await userModel.create({
        name:'Vishwa',
        username:'Vishwa87',
        email:'Vishwatma.dev@gmail.com'
    });

    res.send(createdUser);
})

app.get('/read',async (req,res)=>{
    // let users=await userModel.find() for all users
    let users=await userModel.find()

    res.send(users);
})

app.get('/update',async (req,res)=>{
    // userModel.findOneAndUpdate('findOne',update,{new:true})
    let updatedUser=await userModel.findOneAndUpdate({username:'Vinit97'},{name:'Vinit Kumar Singh'},{new:true});

    res.send(updatedUser);
})

app.get('/delete',async (req,res)=>{
    // let users=await userModel.find() for all users
    let users=await userModel.findOneAndDelete({name:'Vinit'})

    res.send(users);
})

app.listen(3000);