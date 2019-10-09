import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { stringify } from 'querystring';
import {Mutation} from 'apollo-angular';



export class AuthServices {


  isAuth : boolean;

  usrToken : any;

  report : string;

  addUser(apollo: Apollo, $email : string, $logIn: String, $pass : String){
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
        console.log(error)
      },
      () => {
        console.log('Request has been successfully send.!');
      }
    );
  };


  logInUser(apollo: Apollo, $logIn: String, $pass : String){
    apollo
    .mutate({
      mutation: gql`mutation
      {
      loginWithBasic(login: "${$logIn}", pass: "${$pass}", useCookie: false)
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
        this.isAuth = true;
        this.usrToken = value;
        localStorage.setItem("token", this.usrToken.data.loginWithBasic.token);
        window.location.replace('library')
        console.log(this.isAuth)
       

      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('Request has been successfully send.!');
      }
    );
  };
  

  

 
}
