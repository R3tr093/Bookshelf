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
  
  count : number;
  isLoaded : boolean;

  
  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    // Set some variables for loading displaying
    this.isLoaded = false;
    this.count = 1000;


    // Ensure user is auth
    this.isAuth();

    // Get all books
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
            

            if(this.QueriesService.books !== undefined)
            {
              // Set the value of this.books with the return of the queriesServices.
              resolve(this.books = this.QueriesService.books);
              this.books = Array.from(this.books.data.books.nodes);
              this.isLoaded = true;
            }

            else
            {
              this.getBooks(apollo);
              this.count = this.count + 500;
            }
            


      
          }, this.count
      
          );
    })};


    // Redirect url
    isAuth()
    {
      if(!this.AuthService.isAuth)
      {
        window.location.replace('/');
      }
    }
}
