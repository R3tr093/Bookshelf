import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { stringify } from 'querystring';
import {Mutation} from 'apollo-angular';



export class AuthServices {


  isAuth : boolean;

  usrToken : any;

  addUser(apollo: Apollo){
    apollo
    .mutate({
      mutation: gql`mutation
      {
      registerWithBasic(target:{collection: JUNIOR, email: "mossiat.jeoffrey@outlook.com"}, login: "hamilton19", pass: "secret", useCookie: false)
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
        localStorage.setItem("token", this.usrToken.data.registerWithBasic.token);
        console.log(value);

      },
      (error) => {
        console.log('Oh my god , an error occurred fix it bro ! : ' + error);
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
        console.log(value.data);

      },
      (error) => {
        console.log('Oh my god , an error occurred fix it bro ! : ' + error);
      },
      () => {
        console.log('Request has been successfully send.!');
      }
    );
  };
  

  

 
}
