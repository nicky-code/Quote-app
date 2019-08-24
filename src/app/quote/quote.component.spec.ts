import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBlueP} from '../quote-blue-p';

describe('QuoteComponent', () => {
  let component: QuoteBlueP;
  let fixture: ComponentFixture<QuoteBlueP>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBlueP ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBlueP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
