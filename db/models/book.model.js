import { Schema , model } from "mongoose";
//schema
const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content :{
        type : String,
        required:true,
        min : 50,
        max : 2000
    },
    author :{
        type : String,
        required:true

    },
    publishedData : {
        type : Date,
        default : Date.now
    }
},{timestamps:true});
//model
export const Book = model('Book',bookSchema);