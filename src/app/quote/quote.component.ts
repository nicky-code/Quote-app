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
    new QuoteBlueP(1, 'You Only Live Once', 'Mae West', 'Aline Nicole U', new Date (2019, 8, 25)),
    new QuoteBlueP(2, 'Attitude is a Choice', 'Roy T. Bennett', 'Aline Nicole U', new Date (2019, 8, 25)),
    new QuoteBlueP(3, 'Life is just a Chance to Grow a Soul', ' Gwen Randall-Young', 'Aline Nicole U', new Date (2019, 8, 25)),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeDel(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Do you really want to delete ${this.quotes[index].name}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }

  }
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit() {
  }

}
