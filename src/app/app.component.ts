import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from './services/queries.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bookshelf';

  Hello: string;


  constructor(apollo: Apollo, private QueriesService: QueriesServices) {
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
      .subscribe(console.log);
  }

  ngOnInit(): void {

    this.Hello = this.QueriesService.hello;

  }
}
