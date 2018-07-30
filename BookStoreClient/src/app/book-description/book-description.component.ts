import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService';
import { IBook } from '../book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit {

  private book : IBook;

  constructor(private _bookSvc : BookService, private route : ActivatedRoute) { }

  ngOnInit() {
    let isbn = parseInt(this.route.snapshot.paramMap.get('isbn'));
    this._bookSvc.getBookGivenIsbn(isbn)
    .subscribe( (data) => {
      this.book = data;
      console.log(data);
    });
  }

}
