import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StartupModule } from './startupcards/startupcards.module';
import { AppRountingModule } from './app.rounting.module';
import { ErrorsModule } from './errors/errors.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
export const firebase = environment.firebase;
import {AngularFirestoreModule} from 'angularfire2/firestore'
import { AngularFireModule } from 'angularfire2';


export { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StartupModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRountingModule,
    ErrorsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
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
