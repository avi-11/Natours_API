const app=require('./app');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path:'./config.env'});

const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection established");
})


port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("app is listening");
})