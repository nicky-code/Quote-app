import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteBlueP } from '../quote-blue-p';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

@Input() quote: QuoteBlueP;
@Output() isComplete = new EventEmitter<boolean>();

quoteDelete(complete: boolean) {
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
