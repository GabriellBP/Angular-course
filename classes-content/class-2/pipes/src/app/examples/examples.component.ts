import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {

  filterBook: string;

  book: any = {
    'title': 'livro essencialismo',
    'rating': 4.8125,
    'pagesNumber': 272,
    'price': 33.86,
    'releaseDate': new Date(2015, 4, 15),
    'url': 'https://amzn.to/2Gr52oJ'
  };

  books = ['Harry Potter', 'Angular essencial', 'Java'];

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('asynchronous value'), 3000);
  })

  constructor() { }

  addBook(value: string) {
    this.books.push(value);
    console.log(this.books);
  }

  getBooks() {
    if (this.books.length === 0 || this.filterBook === undefined || this.filterBook.trim() === '') {
      return this.books;
    }

    return this.books.filter((v) => {
      return v.toLowerCase().indexOf(this.filterBook.toLowerCase()) >= 0;
    })
  }
}
