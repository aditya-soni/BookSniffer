import { CatalogueModel } from "app/catalogue/catalogue.model";
import { Content } from "app/catalogue/catalogue-content.model";
import { Subject } from "rxjs/Subject";
import { Book } from "app/books/books.model";
import { Story } from "app/stories/stories.model";
import { EventEmitter } from "@angular/core";

export class CatalogueService {

    catalogueChanged=new Subject<CatalogueModel[]>();
    addBookSubject=new Subject<Book>();
    addStorySubject=new Subject<Story>();

    private catalogues:CatalogueModel[]=[
        new CatalogueModel(
            'test title',
            'descriptio is long',
            [
                new Content('Eligilibility','sadasdsads'),
                new Content('test card 1','sadasdsads'),
                new Content('test card 2','sadasdsads'),
            ],
            [
                new Book('Book 1 title','book 1 desc'),
                new Book('Book 1 title','book 1 desc'),
                new Book('Book 1 title','book 1 desc'),
            ],
            [
                new Story('story cactalogue 1', 'desc cat 1')
            ]
        ),
        new CatalogueModel(
            'test title 2',
            'descriptio is lon asdasdsdasddasdasdasdasdasdwdawsg',
            [
                new Content('Eligilibility','sadasdsads'),
                new Content('test card 1','sadasdsads'),
                new Content('test card 2','sadasdsads'),
                new Content('test card 3','sadasdsads'),
            ],
            [
                new Book('Book 2 title','book 2 desc')
            ],
            [
                new Story('story cactalogue 2', 'desc cat 2')
            ]
        ),
       
    ]

    getCatalogue(){
        return this.catalogues.slice();
    }

    addCatalogue(newCatalogue:CatalogueModel){
        this.catalogues.push(newCatalogue);
        this.catalogueChanged.next(this.catalogues.slice());
    }

}