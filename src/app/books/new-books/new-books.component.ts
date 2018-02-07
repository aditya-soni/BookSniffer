import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BooksService } from "app/books/books.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CatalogueService } from "app/catalogue/catalogue.service";

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {
  newBookForm:FormGroup;

  constructor(
    private catalogueService:CatalogueService,
    private booksService:BooksService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    this.booksService.addBook(this.newBookForm.value);
    this.router.navigate(['../'],{relativeTo:this.route});
    this.booksService.saveBookClicked.emit();
    this.catalogueService.addBookSubject.next(this.newBookForm.value)
  }

  private initForm(){ 

    this.newBookForm=new FormGroup({
      'title':new FormControl(null,Validators.required),
      'description':new FormControl(null,Validators.required)
    });

  }

}
