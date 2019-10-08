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

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    
    if(this.AuthService.isAuth !== true && this.AuthService.isAuth !== false)
    {
      this.AuthService.isAuth = false;
      console.log(this.AuthService.isAuth)
    }
    
    this.AuthService.addUser(apollo);
    
  
  }

  ngOnInit() {
  }

  logIn(){
    
    let condition = true;

    if(condition)
    {
      this.AuthService.isAuth = true;
      console.log(this.AuthService.isAuth)
      //window.location.replace('library')
    }

    if(!condition){
      this.AuthService.isAuth = false;
      console.log(this.AuthService.isAuth)
    }

  }

}
