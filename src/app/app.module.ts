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
import { AuthServices } from './services/auth.services';
import { ErrorComponent } from './error/error.component';

import { LibraryComponent } from './library/library.component';
import { AuthComponent } from './auth/auth.component';
import { ArticleComponent } from './article/article.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);






const appRoutes: Routes =
  [
    { path: '', component: AuthComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'article/:isbn', component: ArticleComponent },
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
    ),
    NgZorroAntdModule,
    BrowserAnimationsModule

  ],
  declarations: [AppComponent, ErrorComponent, LibraryComponent, AuthComponent, ArticleComponent],
  bootstrap: [AppComponent],
  providers: [

    QueriesServices,
    AuthServices,
    { provide: NZ_I18N, useValue: en_US }

  ]
})

// Setting token and apollo. 
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink, private AuthService: AuthServices) {

    const http = httpLink.create({ uri: 'https://graph.becode.xyz/' });

    const authLink = new ApolloLink((operation, forward) => {


      operation.setContext({
        headers: {
          // Remove this by const token ? 
          Authorization: 'Bearer ' + this.AuthService.usrToken

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
