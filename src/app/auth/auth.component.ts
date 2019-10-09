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

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    

    this.apollo = apollo;
    
    this.registerForm = false;
    
  
  }

  ngOnInit() {
  }

  logIn(name,pass)
  {
    
    this.AuthService.logInUser(this.apollo, name,pass);

    
  }

  registerUser(mail,name,pass)
  {
    this.AuthService.addUser(this.apollo, mail,name,pass);
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
