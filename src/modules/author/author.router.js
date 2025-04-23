import { Router } from "express";
import { addAuthor , getAllAuthor , getAuthor ,updatAuthor,deleteAuthor} from "./author.controller.js";
const authorRouter = Router();

// add author 
authorRouter.post('/',addAuthor);
// get all authors
authorRouter.get('/', getAllAuthor)
//get author by id
authorRouter.get('/:id', getAuthor)
// update author 
authorRouter.patch("/:id", updatAuthor);
// delete author
authorRouter.delete('/:id', deleteAuthor)

export default authorRouter