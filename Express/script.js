import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Route based middleware
const profileMiddleware=((req,res,next)=>{
console.log("Profile Middleware hai ye BC");
next();
})

app.get('/', (req, res) => {
  res.send('Hellobvbnv nvvbn Vinit')
})

app.get('/profile',profileMiddleware,(req,res,next)=>{
    return next(new Error("Something went wrong!!!!"));
    res.send('Hello from Profile');
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})