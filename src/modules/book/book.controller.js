import { error } from "console"
import { Book } from "../../../db/models/book.model.js"
export const addBook =async (req,res,next)=>{
   try{
     //get data from req
     const {title , content,author,publishedData} = req.body
     //check existing
     const bookExists =await Book.findOne({title})
     if (bookExists){
         throw Error('Book already exists', {cause :409})
 
     }
     //prepare data (hash password)
     const book =Book({
        title,
        content,
        author,
        publishedData,
        
     })
     //add to db
     const createdBook = await book.save() 
     if (!createdBook){
        throw Error('fail to create book', {cause :500})
     }
     //send respons
     return res.status(201).json({
        message : 'book created successfully',
        success : true,
        data : createdBook})
   }catch(error){
    return res.status(error.cause|| 500 ).json({massge:error.message , success : false})
   }
}
export const getAllBooks = async(req,res,next)=>{
    try{
        const GetBooks = await Book.find();
        res.json(GetBooks)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}
export const getBooks = async(req,res,next)=>{
    try{
        const getBookById = await Book.findOne({where : {id : req.params.id}})
        if(!getBookById){
            return res.status(404).json({error : 'Book Not Found'})
        }
        res.json(getBookById)

    }catch { 
        res.status(400).json({error: error.message})
    }
}
export const updateBooks = async (req,res,next) => {
    try{
        const upsatBookBuID = await Book.findOne({where : {id : req.params.id}})
        if(!upsatBookBuID){
            return res.status(404).json({error : 'Book Not Found'})
       
          }
          res.json(upsatBookBuID)
        } catch(error){
            res.status(400).json({error : error.message})
        }
           
}
export const deleteBooks = async (req,res,next)=>{
    try{
        const deleteBookById = await Book.findOne({where : {id : req.params.id}})
        if(!deleteBookById){
            return res.status(404).json({error : 'Book Not Found', success: false})

        }
        await deleteBookById.destroy()
        res.json({message : 'Book deleted successfully', success : true})
    } catch (error){
        res.status(400).json({error : error.message})
    }
}
