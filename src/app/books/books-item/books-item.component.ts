import { Component, OnInit,Input } from '@angular/core';
import { Book } from "app/books/books.model";
import { CatalogueService } from "app/catalogue/catalogue.service";

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {
  bookInputed=false;
  @Input() bookItem:Book;

  constructor(
    private catalogueService:CatalogueService
  ) { }

  ngOnInit() {
  }

  addThisBook(){
    this.catalogueService.addBookSubject.next(this.bookItem);
    this.bookInputed=true;
  }
}
