import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactioncardSingleComponent } from './reactioncard-single.component';

describe('ReactioncardSingleComponent', () => {
  let component: ReactioncardSingleComponent;
  let fixture: ComponentFixture<ReactioncardSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactioncardSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactioncardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
