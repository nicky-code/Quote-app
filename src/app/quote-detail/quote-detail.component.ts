import { Component, OnInit, Input } from '@angular/core';
import { QuoteBlueP } from '../quote-blue-p';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

@Input() quote: QuoteBlueP;
  constructor() { }

  ngOnInit() {
  }

}
