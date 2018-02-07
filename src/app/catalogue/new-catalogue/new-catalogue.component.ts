import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Book } from "app/books/books.model";
import { Story } from "app/stories/stories.model";
import { CatalogueModel } from "app/catalogue/catalogue.model";
import { CatalogueService } from "app/catalogue/catalogue.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-new-catalogue',
  templateUrl: './new-catalogue.component.html',
  styleUrls: ['./new-catalogue.component.css']
})
export class NewCatalogueComponent implements OnInit, OnDestroy {
  catalogueForm:FormGroup;
  catalBooks:Book[]=[];
  catalStories:Story[]=[];
  editMode=false;
  catalBooksSubscription:Subscription;
  catalStoriesSubscription:Subscription;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private catalogueService:CatalogueService,
  ) { }

  ngOnInit() {
    this.initForm();
    // add book subs
    this.catalBooksSubscription= this.catalogueService.addBookSubject.subscribe(
      (book:Book)=>{
        this.catalBooks.push(book);
      }
    )

    // add story subs
    this.catalStoriesSubscription= this.catalogueService.addStorySubject.subscribe(
      (story:Story)=>{
        this.catalStories.push(story);
      }
    )
  }
  onSubmit(){
    const value=this.catalogueForm.value;
    const title= value.title;
    const description=value.description;
    const subdesc=value.subdesc;
    const books=this.catalBooks;
    const stories=this.catalStories;
    const catalogue=new CatalogueModel(
      title,description,subdesc,books,stories
    )
    this.catalogueService.addCatalogue(catalogue);

    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onAddDesc(){
    const addDesc=new FormGroup({
      'partTitle':new FormControl(null,Validators.required),
      'partDesc':new FormControl(null,Validators.required)
    });
    (<FormArray>this.catalogueForm.get('subdesc')).push(addDesc);
  }

  private initForm(){
    let title='';
    let description='';
    let subdesc=new FormArray([]);

    // edit mode code goes here

    this.catalogueForm=new FormGroup({
      'title':new FormControl(title,Validators.required),
      'description':new FormControl(description,Validators.required),
      'subdesc':subdesc
    })
  }
  
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.catalBooksSubscription.unsubscribe();
    this.catalStoriesSubscription.unsubscribe();
  }
}
