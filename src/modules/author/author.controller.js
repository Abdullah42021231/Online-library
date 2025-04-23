import { error } from "console"
import { Author } from "../../../db/models/athour.model.js"

export const addAuthor = async (req,res,next)=>{
    try{
        //get data from db
        const {author} =req.body
        //check Exitans
        const authorExist = await Author.findOne({author})
        if(authorExist) return res.status(400).json({msg:"Author already exist"})
    } catch(error){
          res.status(400).json({error : error.message})
    
           }
}
export const getAllAuthor = async (req,res,next)=>{
    try{
        const getAllAuthors = await Author.find()
        res.json(getAllAuthors)
        
    } catch (error){
        res.status(400).json({error : error.message})
    }
}
export const getAuthor = async (req,res,next)=>{
    try{
        const getAuthorById = await Author.findById({where : {id : req.params.id}})
        if(!getAuthorById){
            return res.status(404).json({error:"Author not found", success : false})
        }
        res.json(getAuthorById)

    } catch (error){
        res.status(400).json({error : error.message})
    }
}
export const updatAuthor = async (req,res,next)=>{
    try{
        const updatAuthorById = await Author.findOne({where : {id : req.params.id}})
        if(!updatAuthorById){
            return res.status(400).json({error: 'Author not found', success : false})

        }
        res.json(updatAuthorById)
    } catch (error){
        res.status(400).json({error : error.message})
    }
}
export const deleteAuthor = async (req,res,next)=>{
   try{
    const deleteAuthorById = await Author.findOne({where : {id : req.params.id}})
    if(!deleteAuthorById){
        return res.status(404).json({error : 'Author not found'})

    }
    await deleteAuthorById.destroy()
    res.json({message: 'Author Delete'})
   }catch (error){
    res.status(400).json({error : error.message})
   }
}
