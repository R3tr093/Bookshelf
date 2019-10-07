import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import { AuthServices} from '../services/auth.services';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books : any;
  booksTitle: any;
  booksAuthor: any;

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    // get all the books ( display theses title in console )
    this.booksTitle = [];
    this.booksAuthor = [];

    

    this.getBooks(apollo);

    

    setTimeout(() => {


     

      for(let i = 0; i < this.books.data.books.nodes.length; i++)
      {
        this.booksAuthor.push(this.books.data.books.nodes[i].author)
        this.booksTitle.push(this.books.data.books.nodes[i].title)
      }

  },5000);
    
    



   
    
  }

  ngOnInit() {
  }

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
