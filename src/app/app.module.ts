import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { StoriesComponent } from './stories/stories.component';
import { AppRouting } from "app/app-routing.module";
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksItemComponent } from "app/books/books-item/books-item.component";
import { NewBooksComponent } from './books/new-books/new-books.component';
import { StoriesListComponent } from './stories/stories-list/stories-list.component';
import { StoriesItemComponent } from './stories/stories-item/stories-item.component';
import { NewStoriesComponent } from './stories/new-stories/new-stories.component';
import { CatalogueService } from "app/catalogue/catalogue.service";
import { CatalogueListComponent } from "app/catalogue/catalogue-list/catalogue-list.component";
import { CatalogueItemComponent } from './catalogue/catalogue-item/catalogue-item.component';
import { BooksService } from "app/books/books.service";
import { StoriesService } from "app/stories/strories.service";
import { NewCatalogueComponent } from "app/catalogue/new-catalogue/new-catalogue.component";
import { NewCatalogueBooksAddComponent } from './books/new-catalogue-books-add/new-catalogue-books-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CatalogueComponent,
    StoriesComponent,
    BooksListComponent,
    BooksItemComponent,
    NewBooksComponent,
    StoriesListComponent,
    StoriesItemComponent,
    NewStoriesComponent,
    CatalogueListComponent,
    CatalogueItemComponent,
    NewCatalogueComponent,
    NewCatalogueBooksAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [CatalogueService, BooksService, StoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
