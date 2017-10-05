import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactioncardListComponent } from './reactioncard-list.component';

describe('ReactioncardListComponent', () => {
  let component: ReactioncardListComponent;
  let fixture: ComponentFixture<ReactioncardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactioncardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactioncardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
