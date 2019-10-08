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
export class AuthComponent implements OnInit {

  info : string;

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    if(this.AuthService.isAuth !== true && this.AuthService.isAuth !== false)
    {
      this.AuthService.isAuth = false;
      console.log(this.AuthService.isAuth)
    }
    

    // TODO

    // = > Ensure you get all data is needed to register or login by the form.

    // This function can post a new user into the API
    //this.AuthService.addUser(apollo, "mossiat.jeoffrey@outlook.com", "hamilton19", "secret");


   
    

    // This function can logged in an user from the API
    this.AuthService.logInUser(apollo, "hamilton19","secret");
    
  
  }

  ngOnInit() {
  }


}
