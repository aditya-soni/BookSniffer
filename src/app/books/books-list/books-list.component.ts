import { Component, OnInit } from '@angular/core';
import { Book } from "app/books/books.model";
import { BooksService } from "app/books/books.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:Book[];
  
  constructor(
    private booksService:BooksService
  ) { }

  ngOnInit() {
    this.books=this.booksService.getBooks();
    this.booksService.booksChanged.subscribe(
      (books)=>{
        this.books=books;
      }
    )
  }

}
