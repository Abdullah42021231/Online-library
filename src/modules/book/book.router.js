import { Router } from "express";
import { addBook ,getAllBooks,getBooks,updateBooks , deleteBooks} from "./book.controller.js";
const bookRouter = Router()

//add books
bookRouter.post('/' , addBook)
//get all books
bookRouter.get('/', getAllBooks)
//get book by id
bookRouter.get('/:id',getBooks)
//update book by id
bookRouter.patch('/:id', updateBooks)
// delete book by id
bookRouter.delete('/:id', deleteBooks)

export default bookRouter