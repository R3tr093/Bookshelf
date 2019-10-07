import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from './services/queries.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Bookshelf';
  
  books: any;

  constructor(apollo: Apollo, private QueriesService: QueriesServices) {

    //Examples

    // get all the books ( display theses title in console )
    
    /*
    this.getBooks(apollo);

    setTimeout(() => {

      for(let i = 0; i < this.books.data.books.nodes.length; i++)
      {
        console.log(this.books.data.books.nodes[i].title)
      }
    },10000)
    */


     // get a single book ( display this title  in console)
     this.QueriesService.getBook(apollo, "dsd");

     setTimeout(() => {
        console.log(QueriesService.books.data.book.title)
    },5000)
    
  
    

 

  }

  ngOnInit(){}
 
  // This function call the services queries and resolve by getting data from this call into books. ** Take an instance of apollo as parameter **
  getBooks(apollo: Apollo){
      
    let request = new Promise((resolve, reject) => {
    
      // Asking to the service for use getBooks function.
      this.books = this.QueriesService.getBooks(apollo);
    
      setTimeout(
    
        () => {
          
          // Set the value of this.books with the return of the queriesServices.
          resolve(this.books = this.QueriesService.books);
    
        }, 2000
    
        );
  })};

  



}
