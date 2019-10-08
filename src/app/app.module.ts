import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';

import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

import { QueriesServices } from './services/queries.services';
import { AuthServices} from './services/auth.services';
import { ErrorComponent } from './error/error.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { type } from 'os';
import { LibraryComponent } from './library/library.component';
import { AuthComponent } from './auth/auth.component';
import { ArticleComponent } from './article/article.component';




      

const appRoutes: Routes = 
[
    { path: '',component: AuthComponent },
    { path: 'library', component: LibraryComponent},
    { path: 'article/:isbn', component: ArticleComponent},
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  declarations: [AppComponent, ErrorComponent, LibraryComponent, AuthComponent, ArticleComponent],
  bootstrap: [AppComponent],
  providers: [
  
    QueriesServices,
    AuthServices

  ]
})

// Setting token and apollo. 
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {

    const http = httpLink.create({uri: 'https://graph.becode.xyz/'});

    const authLink = new ApolloLink((operation, forward) => {


      const token = localStorage.getItem('token');

      operation.setContext({
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoia2V5IiwidWlkIjoiZjc2NzA2NjItYjlkOC00NDA3LWI5MTQtZmUzOGZhZGVmZjA5Iiwia2V5IjoiZTYwMjA1ZmMiLCJpYXQiOjE1Njk5MTQxMjR9.XT1tE1yAreWN82NTpAyaEKw-zKq26bGHaFAQ19BjMB8'          

        }
      });

      return forward(operation);

    });

    apollo.create({
      link: authLink.concat(http),
      cache: new InMemoryCache()
    });

  }
}
