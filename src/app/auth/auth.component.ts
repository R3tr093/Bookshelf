import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import  { AuthServices } from '../services/auth.services';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  registerForm : boolean;

  apollo: Apollo;

  report : any;

  count : number = 2000;

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    

    this.apollo = apollo;
    
    this.registerForm = false;


  }

  ngOnInit() {
  }

  logIn()
  {
    
    let request = new Promise((resolve, reject) => {

      document.getElementById('logError').textContent = "";

      document.getElementById("logSpinner").style.display = "block";

      let logName =  (<HTMLInputElement>document.getElementById("logName")).value;

      let logPass =  (<HTMLInputElement>document.getElementById("logPass")).value;

      this.AuthService.logInUser(this.apollo,logName,logPass);

      setTimeout(

        () => {


          document.getElementById("logSpinner").style.display = "none";

          this.report = this.AuthService.report;
          
          this.report = this.report.message;

          let message = this.report;

          message = message.split("L")

          this.report = message[1];

          document.getElementById('logError').textContent = this.report;

          this.count = this.count + 500;
          

        }, this.count

        );
      }) 
  }

  registerUser()
  {

    let request = new Promise((resolve, reject) => {

      document.getElementById('regError').textContent = "";

      document.getElementById("regSpinner").style.display = "block";

      let regName =  (<HTMLInputElement>document.getElementById("regName")).value;

      let regPass =  (<HTMLInputElement>document.getElementById("password")).value;

      let regMail =  (<HTMLInputElement>document.getElementById("email")).value;

      this.AuthService.addUser(this.apollo, regMail,regName, regPass);

      setTimeout(

        () => {


          if(this.AuthService.report !== undefined)
          {
            document.getElementById("regSpinner").style.display = "none";
            
            this.report = this.AuthService.report;

            

            if((<HTMLInputElement>document.getElementById("password")).value !== (<HTMLInputElement>document.getElementById("password2")).value)
            {
              document.getElementById('regError').textContent = "Error : your passwords are not identical.";
            }
            
            if((<HTMLInputElement>document.getElementById("password")).value === (<HTMLInputElement>document.getElementById("password2")).value)
            {
              document.getElementById('regError').textContent = "Error : Invalid credentials.";
            }


            this.count = this.count + 500;
          }

          else
          {
            document.getElementById('regValidate').textContent = "Account successfully created ! "
          }

        }, this.count

       );
    })
  }

  swipeForm(){

    let registerElt = document.getElementById('register');
    let logInElt = document.getElementById('logIn');
    
    if(registerElt !== undefined && logInElt !== undefined)
    {

      if(!this.registerForm)
      {
        logInElt.style.display = "none"
        registerElt.style.display = "block";
      }

      if(this.registerForm)
      {
        logInElt.style.display = "block"
        registerElt.style.display = "none";
      }
    }

    if(!this.registerForm)
    {
      this.registerForm = true;
    }

    else
    {
      this.registerForm = false;
    }

  }

}
