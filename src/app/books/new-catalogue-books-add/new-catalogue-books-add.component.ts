import { Component, OnInit } from '@angular/core';
import { BooksService } from "app/books/books.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-new-catalogue-books-add',
  templateUrl: './new-catalogue-books-add.component.html',
  styleUrls: ['./new-catalogue-books-add.component.css']
})
export class NewCatalogueBooksAddComponent implements OnInit {
  editMode=false;

  constructor(
    private booksService:BooksService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
        
    this.booksService.saveBookClicked.subscribe(
      ()=>{
        this.editMode=false;
      }
    );
  }
  
  onAddBook(){
    this.router.navigate(['/',{outlets:{book:'book-add'}}]);
    this.editMode=true;
  }

}
