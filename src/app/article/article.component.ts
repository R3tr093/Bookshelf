import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import  { AuthServices } from '../services/auth.services';
import { from } from 'rxjs';
import { Url } from 'url';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {

  // get the current url 
  url : string;

  // get the article isbn
  target : string;

  // follow the loading spinner
  count : number = 0;
  isLoaded : boolean;

  // Get details about a book
  book : any;

  title : string;
  author : string;
  editor : string;
  lang : string;
  cover : string;
  format : string;
  available : string;
  schools : string;
  comments : any;
  commentAuthor : any;
  
  // get apollo
  apollo : Apollo;


  // get data about comment
  isDisplayForm: boolean;
  comment : string;
  
  note : number;
  


 

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {

    this.isLoaded = false;

    this.apollo = apollo;

    //get comments
    this.comments = [];
    this.commentAuthor = [];

    // check the url and call a request for a single book details
    this.urlCheck();
   
    
  }

  ngOnInit() {
  }


  urlCheck(){

    this.url = window.location.href;
    const words = this.url.split('/');
    this.target = words[4];
    this.getBook(this.apollo,this.target)
  }

    // This function call the services queries and resolve by getting data from this call into books. ** Take an instance of apollo as parameter **
    getBook(apollo: Apollo, param){
      

      let request = new Promise((resolve, reject) => {
        
        this.QueriesService.books.data.book = "wait";

        // Asking to the service for use getBooks function.
        this.book = this.QueriesService.getBook(apollo,param);

        setTimeout(
      
          () => {
           

            if(this.QueriesService.books.data.book !== "wait")
            {   

              resolve(this.book = this.QueriesService.books.data.book);
              

              let i = 0;
              while(i < this.book.reviews.nodes.length)
              {
                
                let check = this.book.reviews.nodes[i].comment;
                check = String(check);
                check = check.trim();
                
                if(check !== "")
                {
                  this.comments.push(this.book.reviews.nodes[i].comment)
                  this.commentAuthor.push(this.book.reviews.nodes[i].reviewer.name)
                }
               
                i++;
                
              }

              this.title = this.book.title;
              this.author = this.book.author
              this.editor = this.book.editor
              this.cover = this.book.cover
              this.lang = this.book.lang.name;
              this.format = this.book.format
              this.available = this.book.availabilities[0].available ? "Available" : "Not available";
              this.schools = this.book.availabilities[0].school.name;
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

        // Hide and show the form
        displayForm(){

          if(!this.isDisplayForm)
          {
            let element = document.getElementById("postComment");
            element.classList.remove("bounceOutDown");
            element.classList.add("bounceInDown");
            element.style.display = "block";
            this.isDisplayForm = true;
          }
    
          else
          {
            let element = document.getElementById("postComment");
            element.classList.remove("bounceInDown");
            element.classList.add("bounceOutDown");
            this.isDisplayForm = false;
          }
        }

        // post a comment
        formProcess(){

          let comment =   String((<HTMLInputElement>document.getElementById("comment")).value);

          if(comment.length > 2)
          {
            this.QueriesService.addReview(this.apollo,this.target,"THREE",comment)
          }

         
        }
}



  
