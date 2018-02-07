import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "app/books/books.component";
import { CatalogueComponent } from "app/catalogue/catalogue.component";
import { StoriesComponent } from "app/stories/stories.component";
import { BooksListComponent } from "app/books/books-list/books-list.component";
import { NewBooksComponent } from "app/books/new-books/new-books.component";
import { NewStoriesComponent } from "app/stories/new-stories/new-stories.component";
import { NewCatalogueComponent } from "app/catalogue/new-catalogue/new-catalogue.component";

const appRoutes: Routes = [
    { path: 'new', component: NewCatalogueComponent },
    { path: 'book-add', component: NewBooksComponent,outlet:'book' },
    { path: 'story-add', component: NewStoriesComponent, outlet:'story' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRouting{

}