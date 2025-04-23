import express from 'express';
import {connectDB} from'./db/connection.js';
import bookRouter from './src/modules/book/book.router.js';
import authorRouter from './src/modules/author/author.router.js';
 const app = express();
 app.use(express.json());
 const port = 5000
//create connection
connectDB();

app.use('/book', bookRouter)
app.use('/author', authorRouter)
app.use(express.static('public'));

 app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 })