import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookService } from './BookService';
import { BookDescriptionComponent } from './book-description/book-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookFormComponent,
    BookTableComponent,
    BookDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
