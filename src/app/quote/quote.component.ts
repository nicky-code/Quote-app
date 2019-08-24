import { Component, OnInit } from '@angular/core';
import { QuoteBlueP} from '../quote-blue-p';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: QuoteBlueP[] = [
    { id: 1, name: 'You Only Live Once', authorName: 'Mae West', publishedName: 'Aline Nicole U'},
    { id: 2, name: 'Attitude is a Choice', authorName: 'Roy T. Bennett', publishedName: 'Aline Nicole U' },
    { id: 3, name: 'Life is just a Chance to Grow a Soul', authorName: 'Gwen Randall-Young', publishedName: 'Aline Nicole U' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
