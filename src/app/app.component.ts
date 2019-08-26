import { Component } from '@angular/core';
import { QuoteBlueP } from './quote-blue-p';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: QuoteBlueP [] = [
    new QuoteBlueP(1, 'Aline Nicole U', 'Mae West', 'You Only Live Once', new Date (2019, 8, 25)),

  ];
}
