import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from '../../node_modules/apollo-angular';
import { HttpLinkModule, HttpLink } from '../../node_modules/apollo-angular-link-http';
import { InMemoryCache } from '../../node_modules/apollo-cache-inmemory';
import { StartupModule } from './startupcards/startupcards.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StartupModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https://startups-project-mytvsxrgeb.now.sh/'}),
      cache: new InMemoryCache()
    });
  }
}
