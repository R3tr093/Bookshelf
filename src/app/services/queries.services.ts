import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { stringify } from "querystring";
import { Mutation } from "apollo-angular";

export class QueriesServices extends Mutation {
  books: any;
  isEdit: boolean = false;
  editComment: String;
  editNote: String;


  // -> This function provide all the books and theses titles in the API. ** Take as parameter an instance of apollo **

  getBooks(apollo: Apollo) {
    apollo
      .query({
        query: gql`
          {
            books(all: true) {
              nodes {
                title
                author
                isbn
                cover
                reviews {
                  totalCount
                  nodes {
                    note
                  }
                }
                availabilities {
                  available

                  school {
                    name
                  }
                }
              }
            }
          }
        `
      })
      .subscribe(
        value => {
          this.books = value;
          return value;
        },
        error => {
        },
        () => {

        }
      );
  }

  // Get a single book by his ID
  getBook(apollo: Apollo, $bookID: String) {
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
              borrower
              {
                uid
              }
            } 
            
            reviews
            {
              totalCount
              nodes
              {
                reviewer
                {
                  name
                  uid
                }
                comment
                note
                createdAt
                {
                  timestamp
                }
                uid
              }
            } 
          }
        }
        `
      })
      .subscribe(
        value => {
          this.books = value;
        },
        error => {

        },
        () => {

        }
      );
  }

  postBooks(
    apollo: Apollo,
    $isbn: String,
    $title: String,
    $author: String,
    $editor: String,
    $cover: String
  ) {
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
        `
      })

      .subscribe(
        value => {

          this.books = "done";
        },
        error => {

          this.books = "crash";
        },
        () => {

        }
      );
  }

  addReview(apollo: Apollo, $isbn: String, $vote: String, $comment: String) {
    apollo
      .mutate({
        mutation: gql`mutation
          {
            addBookReview(bookISBN: "${$isbn}",review:{note: ${$vote}, lang: "FR", comment: "${$comment}"})
            {
              book{title}
              
            }
          }
        `
      })

      .subscribe(
        value => {

          window.location.reload();
        },
        error => {

        },
        () => {

        }
      );
  }

  editReview(apollo: Apollo, $id: String, $vote: String, $comment: String) {
    apollo
      .mutate({
        mutation: gql`mutation
          {
            editBookReview(uid: "${$id}",review:{note: ${$vote}, lang: "FR", comment: "${$comment}"})
            {
              book{title}
            }
          }
        `
      })

      .subscribe(
        value => {
          if (this.isEdit) {
            window.location.reload();
          }
          this.isEdit = true;
          this.editComment = $comment;
          this.editNote = $vote;

        },
        error => {

        },
        () => {

        }
      );
  }

  borrowBook(apollo: Apollo, $id: String) {
    apollo
      .mutate({
        mutation: gql`mutation
          {
            borrowBook(book:  "${$id}", school:"liege")
            {
              isbn
            }
          }
        `
      })

      .subscribe(
        value => {

        },
        error => {

        },
        () => {

        }
      );
  }


  returnBook(apollo: Apollo, $id: String) {
    apollo
      .mutate({
        mutation: gql`mutation
          {
            returnBook(book:  "${$id}", school:"liege")
            {
              isbn
            }
          }
        `
      })

      .subscribe(
        value => {
        },
        error => {
        },
        () => {
        }
      );
  }



}
