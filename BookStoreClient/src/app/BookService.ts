import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { IBook } from "./book";
import { Observable } from "../../node_modules/rxjs";

@Injectable()
export class BookService
{
    //the url of our server
    private _url : string = 'http://localhost:3000/api/books';

    private _deleteurl : string = 'http://localhost:3000/api/books/';

    constructor(private http:HttpClient)
    {
    }

    //get method to retrieve all of the books in the catalog
    getBooksInCatalog() : Observable<IBook[]>
    {
        return this.http.get<IBook[]>( this._url );
    }

    //get method to retrieve a book with specific isbn
    getBookGivenIsbn(isbnNumber: number): Observable<IBook>
    {
        return this.http.get<IBook>(this._deleteurl + isbnNumber);
    }

    //post method to add a book to our book catalog
    putBookInCatalog(book : IBook) : Observable<IBook>
    {
        return this.http.post<IBook>(this._url, book);
    }

    //delete method to remove a book from our catalog
    removeBookFromCatalog(isbnNumber: number) : Observable<IBook[]>
    {
        return this.http.delete<IBook[]>(this._deleteurl + isbnNumber);
    }
}