import { Content } from "app/catalogue/catalogue-content.model";
import { Injectable } from "@angular/core";
import { Book } from "app/books/books.model";
import { Story } from "app/stories/stories.model";
@Injectable()
export class CatalogueModel {

    constructor(
        private title:string,
        private description:string,
        private subdesc:Content[],
        private books:Book[],
        private stories:Story[]
    ) {
        
    }
}