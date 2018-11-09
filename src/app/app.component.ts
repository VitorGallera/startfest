import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startupcards = [
    {
      imageUrl: 'https://www.eaalim.com/download/wp-content/uploads/2014/01/hellfire.jpg',
      name: 'Hellfire Games'
    },
    {
      imageUrl: 'https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png',
      name: 'AgroNow'
    }
  ];
}

