import { Component, OnInit } from '@angular/core';
import { QuoteBlueP} from '../quote-blue-p';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: QuoteBlueP [] = [
    new QuoteBlueP(1, 'You Only Live Once', 'Mae West', 'Aline Nicole U'),
    new QuoteBlueP(2, 'Attitude is a Choice', 'Roy T. Bennett', 'Aline Nicole U'),
    new QuoteBlueP(3, 'Life is just a Chance to Grow a Soul', ' Gwen Randall-Young', 'Aline Nicole U'),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {
  }

}
