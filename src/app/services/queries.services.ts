import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { stringify } from 'querystring';
import {Mutation} from 'apollo-angular';



export class QueriesServices extends Mutation {


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
                  author
                  isbn
                  cover
                  availabilities
                  {
                    available

                    school
                    {
                      name
                    }
                  } 
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
            author
            cover
            editor
            format
            lang {
              code
              name
            }
            
            availabilities
            {
              school
              {
                name
              }
            	available
            } 
            
            reviews
            {
              nodes
              {
                reviewer
                {
                  name
                }
                comment
                note
                createdAt
                {
                  timestamp
                }
              }
            } 
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

    


  postBooks(apollo: Apollo, $isbn: String, $title: String, $author : String, $editor : String, $cover : String)
  { 
    apollo
      .mutate({
        mutation: gql`mutation
          {
            addBook(book: {isbn: "${$isbn}",title: "${$title}",author: "${$author}",editor: "${$editor}", cover: "${$cover}", lang: "FR", format:PHYSICAL, schools:["liege"]})
            {isbn
             title 
             author
             editor
             lang
              {code}
             cover
             format
            }
          }
        `,
      })
    
      .subscribe(
        (value) => {
          console.log("Data has been successfully posted !")
          this.books = "done";
        },
        (error) => {
          console.log('Oh my god , an error occurred fix it bro ! : ' + error);
          this.books = "crash";
        },
        () => {
          console.log('Request has been successfully send.!');
        }
      );
  }



  addReview(apollo: Apollo)
  { 
    apollo
      .mutate({
        mutation: gql`mutation
          {
            addBookReview(bookISBN: "978-2-10-077678-8", review: {
              lang: "",
              note: "FIVE"
            }) {
      note
      reviewer {
        name
        slug
      }
      book {
        reviews {
          edges {
            cursor
            node {
              note
            }
          }
          totalCount
        }
      }
      uid
    }
          }
        `,
      })
    
      .subscribe(
        (value) => {
          console.log("Data has been successfully posted !")
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
