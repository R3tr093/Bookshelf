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
  allNotes: any[] = [];
  booksReviews: any[] = [];
  apollo : any;
  tooltips = ["terrible", "bad", "normal", "good", "wonderful"];

  isDisplayForm : boolean = false;

  filter : boolean;


  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    this.QueriesService.isEdit = false;
    this.AuthService.usrToken = localStorage.getItem('token');

    this.filter = this.QueriesService.filter;

    // Set some variables for loading displaying
    this.isLoaded = false;

    this.apollo = apollo;
   
    // Get all books
    this.getBooks(apollo,this.filter,"liege");
    

  }

  ngOnInit() {
  }

    // This function call the services queries and resolve by getting data from this call into books. ** Take an instance of apollo as parameter **
    getBooks(apollo: Apollo, filter, filterValue){

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

                           
              
              for (let i = 0; i < this.books.length; i++) {
                this.allNotes[i] = this.books[i].reviews.nodes;
              }
              for (let i = 0; i < this.allNotes.length; i++) {
                if (this.allNotes[i].length > 0) {
                  let totalReviews = 0;
                  this.books[i].reviews.nodes.map((a: any) => {
                    totalReviews += a.note;
                  });
                  this.booksReviews.push(
                    Math.round(
                      (totalReviews / this.books[i].reviews.totalCount) * 10
                    ) / 10
                  );
            }else {
              this.booksReviews.push(0);
            }
          }

              if(filter === true)
              {

                 // Return books for the school with the name liege or similar to.
                for( var i = 0; i < this.books.length; i++)
                 { 

                  if(filterValue === "Liège")
                  {
                    if (this.books[i].availabilities[0].school.name !== "Liège")
                    {
                      console.log("Deleted :: " + this.books[i].availabilities[0].school.name)
                      this.books.splice(i);
                    }
                  }

                  if(filterValue === "Bruxelles")
                  {
                    if (this.books[i].availabilities[0].school.name !== "Anderlecht" && this.books[i].availabilities[0].school.name !== "Bruxelles")
                    {
                      console.log("Deleted :: " + this.books[i].availabilities[0].school.name)
                      this.books.splice(i);

                    }
                  }

                  if(filterValue === "Charleroi")
                  {
                    if (this.books[i].availabilities[0].school.name !== "Charleroi")
                    {
                      console.log("Deleted :: " + this.books[i].availabilities[0].school.name)
                      this.books.splice(i);
                    
                    }
                  }
                }
              }

          this.isLoaded = true;
        }

            else
            {
              this.getBooks(apollo,this.filter,'liege');
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
      
      let lang;

      if((<HTMLInputElement>document.getElementById("fr")).checked)
      {
         lang = "FR";
      }

      if((<HTMLInputElement>document.getElementById("en")).checked)
      {
         lang = "EN";
      }

      
      let school =  String((<HTMLSelectElement>document.getElementById("school")).value);
      school = school.toLocaleLowerCase();
     
      if(school === "liège")
      {
        school = "liege";
      }


      let report = document.getElementById('report');
      let validate = document.getElementById('validate');

      if(isbn !== "" && title !== "" && editor !== "" && cover !== "" && author !== "" && lang !== "" && school !== "")
      {
      
      let request = new Promise((resolve, reject) => {
    
        this.QueriesService.books = "wait";
        // Asking to the service for use getBooks function.
        this.books = this.QueriesService.postBooks(this.apollo,isbn,title,author,editor,cover,lang,school);

        setTimeout(

          () => {

            report.innerHTML = " ";
            validate.innerHTML = " ";

            if(this.QueriesService.books !== "wait")
            {
              validate.innerHTML = validate.innerHTML + " Book successfully submited.";
              this.getBooks(this.apollo,this.filter,'liege')
             
            }

            else
            {
              report.textContent = "";
              report.textContent = " We're sorry an error as occured.";
              this.getBooks(this.apollo,this.filter,'liege')
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

        if(lang === "")
        {
          report.innerHTML = report.innerHTML + "<br> Error : Missing field language";
        }

        if(school === "")
        {
          report.innerHTML = report.innerHTML + "<br> Error : Missing field school";
        }

        
      }

    }

}
