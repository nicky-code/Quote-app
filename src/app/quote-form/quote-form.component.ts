import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteBlueP} from '../quote-blue-p';
import { from } from 'rxjs';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  newQuote = new QuoteBlueP(0 , ' ', ' ', ' ', new Date());
  @Output() addQuote = new EventEmitter<QuoteBlueP>();

  constructor() { }

  ngOnInit() {
  }

}
