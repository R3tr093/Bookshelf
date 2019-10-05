import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';



export class QueriesServices {
    
 

  books : any;

  // -> This function provide all the books and theses titles in the API. ** Take as parameter an instance of apollo **

  getBooks(apollo: Apollo) {
    apollo
      .query({
        query: gql`
          {
              books(all:true) {
                nodes
                {
                  title
                }
              }
          }
        `,
      })
      .subscribe(
        (value) => {
          this.books = value;
          return value;
        },
        (error) => {
          console.log('Oh my god , an error occurred fix it bro ! : ' + error);
        },
        () => {
          console.log('Request has been successfully send.!');
        }
      );
  }

 c


}


