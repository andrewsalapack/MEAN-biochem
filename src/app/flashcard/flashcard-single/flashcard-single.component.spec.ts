import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSingleComponent } from './flashcard-single.component';

describe('FlashcardSingleComponent', () => {
  let component: FlashcardSingleComponent;
  let fixture: ComponentFixture<FlashcardSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
