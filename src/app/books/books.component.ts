import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import { BooksService } from "app/books/books.service";
import { Book } from "app/books/books.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  editMode=false;
  books:Book[];
  
  constructor(
    private router:Router,
    private booksService:BooksService
  ) { }

  ngOnInit() {
    this.books=this.booksService.getBooks();
    this.booksService.booksChanged.subscribe(
      (books:Book[])=>{
        this.books=books;
      }
    )

    this.router.events.subscribe(
      (e)=>{
        if (e instanceof NavigationEnd) {
          if (e.url==='/new') {
            this.editMode=true;
          } else{
            this.editMode=false;
          }
        }
      }
    );
  }


}
