import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import  { AuthServices } from '../services/auth.services';
import { from } from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {

  url : string;

  // get the article isbn
  target : string;

  count : number;
  isLoaded : boolean;

  book : any;

  title : string;

 

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {

    this.isLoaded = false;
    this.count = 3000;
    
    this.urlCheck();
    this.title = "ok";
        
    this.getBook(apollo,this.target)
    
   
    
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
           

            if(this.QueriesService.books.data.book !== undefined)
            {   

              resolve(this.book = this.QueriesService.books.data.book);
              this.title = this.book.title;
              this.isLoaded = true;
            }

            else
            {
              this.getBook(apollo,this.target)
              this.count = this.count + 500;
            }

            

          }, this.count
      
          );
        });
    };
}
