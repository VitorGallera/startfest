import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Startup , Query } from '../../types';



@Component({
  selector: 'ap-startupcard',
  templateUrl: './startupcard.component.html',
  styleUrls: ['./startupcard.component.css']
})
export class StartupCardComponent implements OnInit {
  startups: Observable<Startup[]>;
  
  constructor(private apollo: Apollo) {
    
  }

  ngOnInit() {
    this.startups = this.apollo.watchQuery<Query>({
      query: gql`
        query allStartups {
          allStartups{
            name
            imageUrl
            description
          }
        }
      `
    })
    
      .valueChanges
      .pipe(
        map(result => result.data.allStartups )
      );

  }
}

