import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService';
import {IBook} from '../book';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  genreTypes : string[] = ['Science Fiction',
    'Satire',
    'Drama',
    'Action',
    'Romance',
    'Mystery',
    'Horror']

    title : string = "";
    genre : string = "";
    description : string = "";
    isbn : number;
    author : string = "";
    date : string = "";
    price : number;

  constructor(private _bookSvc : BookService) { }

  ngOnInit() {

  }

  assertValidForm()
  {
    return this.title!=="" 
        && this.genre!=="" 
        && this.description!=="" 
        && this.isbn!==undefined
        && this.author!=="" 
        && this.date!=="" 
        && this.price!==undefined;
  }

  addNewBook()
  {
    //make http request
    let book : IBook = {
      'title' : this.title,
      'genre' : this.genre,
      'description' : this.description,
      'isbn' : this.isbn,
      'author' :this.author,
      'date' : this.date,
      'price' : this.price};
      if(this.assertValidForm())
      {
        this._bookSvc.putBookInCatalog(book).subscribe(
          (data) => {
            if(book.isbn === data.isbn)
            {
              alert("Book added successfully to catalog");
            }
          }
        );
      }
      else
      {
        alert("Please fill form correctly")
      }
  }

}
