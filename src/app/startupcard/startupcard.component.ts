import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-startupcard',
  templateUrl: './startupcard.component.html',
  styleUrls: ['./startupcard.component.css']
})
export class StartupCard {
     @Input() url = '';
     @Input() nome = '';
     @Input() segmento = '';

}