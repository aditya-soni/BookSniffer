import { Book } from "app/books/books.model";
import { Subject } from "rxjs/Subject";
import { EventEmitter, Output } from "@angular/core";

export class BooksService {
    @Output() saveBookClicked=new EventEmitter<void>();
    booksChanged=new Subject<Book[]>();

    private books:Book[]=[
        new Book(
            'Book 1',
            'Book 1 Desctription'
        ),
        new Book(
            'Book 2',
            'Book 2 Desctription'
        ),
    ] ;

    getBooks(){
        return this.books.slice();
    }

    addBook(newBook:Book){
        this.books.push(newBook);
        this.booksChanged.next(this.books.slice());
    }
}