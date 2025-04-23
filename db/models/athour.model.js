import {Schema , model} from 'mongoose'
import { type } from 'os'
//schema
const authorSchema = new Schema({
    name :{
        type : String,
        required : true,
    },
    bio :String,
    birthDate :Date,
    books :Array
}, {timestamps : true})
//model

export const Author = model ('Author', authorSchema)