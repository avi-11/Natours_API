const { Timestamp } = require('mongodb');
const mongoose=require('mongoose');

const tourSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"A tour must have a name"],
        unique:true,
        trim:true
        
    },
    duration:{
        type:Number,
        required:[true,"duration needed"]
    },
    maxGroupSize:{
        type:Number,
        required:[true,"group size needed"]
    },
    
    difficulty:{
        type:String,
        required:[true,"A tour must have a difficulty"],
        
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,"A tour must have a price"],
        
    },
    discount:Number,
    summary:{
        type:String,
        trim:true,
        required:[true,"summary needed"]
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:[true,"image needed"]
    },
    image:[String],
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    },
    startDate:[Date],
    
})

const Tour=mongoose.model('Tour',tourSchema);
module.exports=Tour;