import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['You Only Live Once','Attitude is a  Choice', 'Life is just a Chance to Grow a Soul'];
  }
  
}
