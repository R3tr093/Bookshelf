import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { stringify } from 'querystring';



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


  // Get a single book by his ID
  getBook(apollo: Apollo, $bookID: String,) {
    apollo
      .query({
        query: gql`   
        {
          book(isbn: "${$bookID}") 
          {
            title  
          }
        }
        `,
      })
      .subscribe(
        (value) => {
          this.books = value;
         
        },
        (error) => {
          console.log('Oh my god , an error occurred fix it bro ! : ' + error);
        },
        () => {
          console.log('Request has been successfully send.!');
        }
      );
  }



  postBooks(apollo: Apollo) {
    apollo
      .mutate({
        mutation: gql`
          {
            addBook(book: {isbn: "dsd",title: "hey",author: "paul",editor: "paulInc", schools:["liege"], lang: "FR", format:PHYSICAL})
            {isbn
             title 
             author
             editor
             lang
              {code}
             format
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

 
}
