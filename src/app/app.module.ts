import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'

import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, Apollo } from 'apollo-angular'

import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link';

import { queriesServices } from './services/queries.services';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [queriesServices]
})


export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    
    const http = httpLink.create({uri: 'https://graph.becode.xyz/'});

    const authLink = new ApolloLink((operation, forward) => {
      
      const token = localStorage.getItem('token');
    
      operation.setContext({
        headers: {
          'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoia2V5IiwidWlkIjoiZjc2NzA2NjItYjlkOC00NDA3LWI5MTQtZmUzOGZhZGVmZjA5Iiwia2V5IjoiZTYwMjA1ZmMiLCJpYXQiOjE1Njk5MTQxMjR9.XT1tE1yAreWN82NTpAyaEKw-zKq26bGHaFAQ19BjMB8"
        }
      });
    
      return forward(operation);

    });

    apollo.create({
      link: authLink.concat(http),
      cache: new InMemoryCache()
    })

  }
}