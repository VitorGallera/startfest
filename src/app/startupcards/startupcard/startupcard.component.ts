import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-startupcard',
  templateUrl: './startupcard.component.html',
  styleUrls: ['./startupcard.component.css']
})
export class StartupCardComponent {
     @Input() imageUrl = '';
     @Input() name = '';

}