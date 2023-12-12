import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Hello");
})
app.post('/login',(req,res)=>{
    res.send("Login");
})
app.get('*',(req,res,next)=>{
    res.status(200).send("Bad Request");
  })
app.listen(port,()=>{
    console.log('Server is running on port');
})
