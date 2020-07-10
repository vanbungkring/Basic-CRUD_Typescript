// import {Request, Response, request} from "express";
// import Book from './../book';
// import BookWorker from "./book.worker";

// class BookService {
//     worker: any;
//     initRouter() {
//         throw new Error("Method not implemented.");
//     }
//     constructor() {
//         this.initRouter();
//         this.worker = new BookWorker();
//     }
// }
// // GET = returns all books
// export let allBooks = (req:Request, res: Response)=>{
//     let books = Book.find((err: any, book: any) => {
//         if(err){
//             res.send(err);
//         }else{
//             res.send(books);
//         }
//     })
// }

// // GET = returns book by id
// export let getBooks = (req:Request, res: Response)=>{
//     Book.findById(req.params.id, (err:any, book:any)=>{
//         if(err){
//             res.send(err);
//         }else{
//             res.send(book);
//         }
//     })
// }

// // PUT = adding new book
// export let addBook = (req:Request, res:Response)=>{
//     let book = new Book(req.body);

//     book.save((err:any)=>
//     {
//         if(err){
//             res.send(err);
//         }else{
//             res.send(book);
//         }
//     })
// }

// // DELETE = delete book
// export let deleteBook = (req:Request, res:Response)=>{
//   Book.deleteOne({_id: req.params.id}, (err:any)=>
//   {
//     if(err){
//         res.send(err);
//     }else{
//         res.send("Successfully deteled the book");
//     }
//   })
// }

// // UPDATE = update book
// export let updateBook = (req:Request, res:Response)=>{
//     Book.findByIdandUpdate(req.params.id, req.body, (err: any, book:any)=>{
//         if(err){
//             res.send(err);
//         }else{
//             res.send("Successfully updated the book");
//         }
//     })
//   }
  

