import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import  { AuthServices } from '../services/auth.services';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {

  url : string;

  // get the article isbn
  target : string;

  book : any;

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    this.isAuth();
    
    this.urlCheck();

        
    this.getBook(apollo,this.target)

     setTimeout(() => {
        console.log(QueriesService.books.data.book.title)
    },5000)
    
  }

  ngOnInit() {
  }


  urlCheck(){

    this.url = window.location.href;
    const words = this.url.split('/');
    this.target = words[4];

    
  }

    // This function call the services queries and resolve by getting data from this call into books. ** Take an instance of apollo as parameter **
    getBook(apollo: Apollo, param){
      
      let request = new Promise((resolve, reject) => {
      
        // Asking to the service for use getBooks function.
        this.book = this.QueriesService.getBook(apollo,param);
      
        setTimeout(
      
          () => {
            
            // Set the value of this.books with the return of the queriesServices.
            resolve(this.book = this.QueriesService.books);
      
          }, 2000
      
          );
    })};
    
    isAuth(){
      if(!this.AuthService.isAuth)
      {
        window.location.replace("/");
      }
    }

}
