import { Component } from '@angular/core';
import { QuoteBlueP } from './quote-blue-p';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:QuoteBlueP [] = [
    {id:1, name:'You Only Live Once'},
    {id:2,name:'Attitude is a Choice'},
    {id:3,name:'Life is just a Chance to Grow a Soul'},
  ];
}
