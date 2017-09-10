import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardLandingComponent } from './flashcard-landing.component';

describe('FlashcardLandingComponent', () => {
  let component: FlashcardLandingComponent;
  let fixture: ComponentFixture<FlashcardLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
