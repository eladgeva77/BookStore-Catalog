import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../BookService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  public books = [];
  public bookToShowDescription;

  constructor(private _bookSvc : BookService, private router : Router) { }

  ngOnInit() {
    this._bookSvc.getBooksInCatalog()
    .subscribe( (data) => this.books = data);
  }

  removeFromCatalog(isbn)
  {
    this._bookSvc.removeBookFromCatalog(isbn)
    .subscribe( (data) => this.books = data);
  }

  detailsBtnClick(book)
  {
    this.router.navigate([
      '/', book.isbn
    ]);
  }

  CatalogContainsAtleastOneBook()
  {
    return this.books.length > 0;
  }

}
