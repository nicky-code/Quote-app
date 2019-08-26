import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteBlueP } from '../quote-blue-p';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  constructor() { }

@Input() quote: QuoteBlueP;
@Output() isComplete = new EventEmitter<boolean>();

upvotes = 0;
downVotes = 0;

totalUpvotes() {
  this.upvotes++;
}

totalDownvotes() {
  this.downVotes++;
}


quoteDelete(complete: boolean) {
  this.isComplete.emit(complete);
}

  ngOnInit() {
  }

}
