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
  book : any = "wait";

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
  bookId : string;

  
  // get apollo
  apollo : Apollo;


  // get data about comment
  isDisplayForm: boolean;
  

  note : number;
  isEdit : boolean;
  toEdit : any;
  


 

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
                
                if(this.book.reviews.nodes[i].comment)
                {
                  this.comments.push(this.book.reviews.nodes[i].comment)
                  this.commentAuthor.push(this.book.reviews.nodes[i].reviewer.name)    
                          
                }
                i++;
                
              }

              if(this.book !== "wait")
              {
                this.editProcess();
                
                setTimeout(()=>{
                  this.isEdit = this.QueriesService.isEdit;
                  this.toEdit = this.QueriesService.editComment;
                },5000)

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
        commentProcess(){

          let comment = String((<HTMLTextAreaElement>document.getElementById("comment")).value);

          if(comment.length > 2)
          {
            this.QueriesService.addReview(this.apollo,this.target,"ONE",comment)
          }

         
        }

        editProcess(){
         
          let i = 0;

         

          if(this.isEdit)
          {
            let comment = String((<HTMLTextAreaElement>document.getElementById("editComment")).value);

               while(i < this.book.reviews.nodes.length)
            {
               this.bookId = this.book.reviews.nodes[i].uid;
               this.toEdit = this.book.reviews.nodes[i].comment;
               this.QueriesService.editReview(this.apollo,this.bookId,"ONE",comment);
               i++;
            }
          }

          while(i < this.book.reviews.nodes.length)
          {
              this.bookId = this.book.reviews.nodes[i].uid;
              this.toEdit = this.book.reviews.nodes[i].comment;
              this.QueriesService.editReview(this.apollo,this.bookId,"ONE",this.book.reviews.nodes[i].comment);
              
              
            i++;
          }

        }

        


}



  
