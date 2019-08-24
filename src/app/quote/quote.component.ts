import { Component, OnInit } from '@angular/core';
import { QuoteBlueP} from '../quote-blue-p';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteBluePComponent implements OnInit {
  quotes: QuoteBlueP[] = [
    { id: 1, name: 'You Only Live Once' },
    { id: 2, name: 'Attitude is a Choice' },
    { id: 3, name: 'Life is just a Chance to Grow a Soul' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
