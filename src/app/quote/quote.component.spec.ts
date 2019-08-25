import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBluePComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteBluePComponent;
  let fixture: ComponentFixture<QuoteBluePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBluePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBluePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
