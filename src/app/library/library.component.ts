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

  
  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    // Ensure user is auth
    this.isAuth();

    this.getBooks(apollo);

    
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
            this.books = Array.from(this.books.data.books.nodes);
            


      
          }, 10000
      
          );
    })};

    isAuth(){
      if(!this.AuthService.isAuth)
      {
        window.location.replace('/');
      }
    }
}
