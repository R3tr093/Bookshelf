import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { QueriesServices } from '../services/queries.services';
import  { AuthServices } from '../services/auth.services';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {

  url : string;

  // get the article isbn
  target : string;


  constructor(apollo: Apollo, private QueriesService: QueriesServices, private AuthService: AuthServices) {
    this.urlCheck();
  }

  ngOnInit() {
  }


  urlCheck(){

    this.url = window.location.href;
    const words = this.url.split('/');
    this.target = words[4];

    
  }

}
