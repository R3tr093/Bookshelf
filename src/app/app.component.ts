import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from './services/queries.services';
import { AuthServices } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Bookshelf';

  books: any;

  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) { }

  ngOnInit() { }







}
