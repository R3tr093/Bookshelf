import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import { AuthServices} from '../services/auth.services';
import { element } from 'protractor';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books : any;

  count : number = 0;
  isLoaded : boolean;

  apollo : any;

  isDisplayForm : boolean = false;


  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    
    this.AuthService.usrToken = localStorage.getItem('token');



    // Set some variables for loading displaying
    this.isLoaded = false;

    this.apollo = apollo;
   
    // Get all books
    this.getBooks(apollo);
    
    function isUrlValid(userInput) {
      var res = userInput.match(/^((?:http:\/\/)|(?:https:\/\/))(www.)?((?:[a-zA-Z0-9]+\.[a-z]{3})|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?))([\/a-zA-Z0-9\.]*)$/gm);
      if(res == null)
          return false;
      else
          return true;
   }




  }

  ngOnInit() {
  }

    // This function call the services queries and resolve by getting data from this call into books. ** Take an instance of apollo as parameter **
    getBooks(apollo: Apollo){

      let request = new Promise((resolve, reject) => {

        this.QueriesService.books = "wait";
        // Asking to the service for use getBooks function.
        this.books = this.QueriesService.getBooks(apollo);

        setTimeout(

          () => {


            if(this.QueriesService.books !== "wait")
            {
              // Set the value of this.books with the return of the queriesServices.
              resolve(this.books = this.QueriesService.books);
              
              this.books = Array.from(this.books.data.books.nodes);

              // Return books for the school with the name liege or similar to.
              for( var i = 0; i < this.books.length; i++)
              { 

                if (this.books[i].availabilities[0].school.name !== "Liège" && this.books[i].availabilities[0].school.name !== "Liege"  && this.books[i].availabilities[0].school.name !== "liege"  && this.books[i].availabilities[0].school.name !== "liège")
                {
                     this.books.splice(i, 1);
                }
              }
             

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

    
    // Hide and show the form
    displayForm(){

      if(!this.isDisplayForm)
      {
        let element = document.getElementById("addBookForm");
        element.classList.remove("bounceOutDown");
        element.classList.add("bounceInDown");
        element.style.display = "block";
        this.isDisplayForm = true;
      }

      else
      {
        let element = document.getElementById("addBookForm");
        element.classList.remove("bounceInDown");
        element.classList.add("bounceOutDown");
        this.isDisplayForm = false;
      }
    }

    // Read data &&  process to a post request
    formProcess(){

      let isbn =   String((<HTMLInputElement>document.getElementById("isbn")).value);
      let title =  String((<HTMLInputElement>document.getElementById("title")).value);
      let editor =  String((<HTMLInputElement>document.getElementById("editor")).value);
      let cover =   String((<HTMLInputElement>document.getElementById("cover")).value);
      let author =   String((<HTMLInputElement>document.getElementById("author")).value);

      let report = document.getElementById('report');
      let validate = document.getElementById('validate');

      if(isbn !== "" && title !== "" && editor !== "" && cover !== "" && author !== "")
      {
      
      let request = new Promise((resolve, reject) => {
    
        this.QueriesService.books = "wait";
        // Asking to the service for use getBooks function.
        this.books = this.QueriesService.postBooks(this.apollo,isbn,title,author,editor,cover);

        setTimeout(

          () => {


            validate.innerHTML = " ";

            if(this.QueriesService.books !== "wait")
            {
              validate.innerHTML = validate.innerHTML + " Book successfully submited."
             
            }

            else
            {
              report.textContent = "";
              report.textContent = " We're sorry an error as occured.";
            }
          }, 5000

          );
       })

      }
      
      else
      {
        report.innerHTML = " ";

        if(isbn === "")
        {
          report.innerHTML  = report.innerHTML  + "<br> Error : Missing field isbn.";
        }

        if(title === "")
        {
          report.innerHTML  = report.innerHTML  + "<br> Error : Missing field title.";
        }

        if(author === "")
        {
          report.innerHTML  = report.innerHTML  + "<br> Error : Missing field author.";
        }

        if(editor === "")
        {
          report.innerHTML  = report.innerHTML  + "<br> Error : Missing field editor.";
        }

        if(cover === "")
        {
          report.innerHTML = report.innerHTML + "<br> Error : Missing field cover";
        }

        
      }

    }

}
