import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { stringify } from 'querystring';
import { Mutation } from 'apollo-angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';




export class AuthServices {


  isAuth: boolean;

  usrToken: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoia2V5IiwidWlkIjoiZjc2NzA2NjItYjlkOC00NDA3LWI5MTQtZmUzOGZhZGVmZjA5Iiwia2V5IjoiZTYwMjA1ZmMiLCJpYXQiOjE1Njk5MTQxMjR9.XT1tE1yAreWN82NTpAyaEKw-zKq26bGHaFAQ19BjMB8";

  report: string = "null";

  addUser(apollo: Apollo, $email: string, $logIn: String, $pass: String) {
    apollo
      .mutate({
        mutation: gql`mutation
      {
      registerWithBasic(target:{collection: JUNIOR, email: "${$email}"}, login: "${$logIn}", pass: "${$pass}", useCookie: false)
        {
          connected
          token
          headers
          csrfToken
        }
      
        
          
        
      }
    `
      }).subscribe(
        (value) => {
          this.usrToken = value;
          localStorage.setItem("token", this.usrToken.data.loginWithBasic.token);
          console.log("User as registered successfully, you can be proud of you ! ");

        },
        (error) => {
          this.report = error;
          console.log(error)
        },
        () => {
          console.log('Request has been successfully send.!');
        }
      );
  };


  logInUser(router: Router, apollo: Apollo, $logIn: String, $pass: String) {
    apollo
      .mutate({
        mutation: gql`mutation
      {
      loginWithBasic(login: "${$logIn}", pass: "${$pass}", useCookie: false)
        {
          token
        }
      }
    `
      }).subscribe(
        (value) => {
          this.isAuth = true;
          this.usrToken = value;
          router.navigate(['/library']);
          if (this.usrToken.data.loginWithBasic.token !== undefined) {
            localStorage.setItem("token", this.usrToken.data.loginWithBasic.token);
          }
        },
        (error) => {
          this.report = error;
        },
        () => {
          console.log('Request has been successfully send.!');
        }
      );
  };





}
