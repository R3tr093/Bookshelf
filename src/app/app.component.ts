import { Component } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'
import { queriesServices } from './services/queries.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookshelf';
  constructor(apollo: Apollo, private queriesService: queriesServices) {
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
      .subscribe(console.log)
  }
}
