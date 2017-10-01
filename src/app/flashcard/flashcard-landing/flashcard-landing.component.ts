import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FlashcardListComponent } from '../flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from '../flashcard-single/flashcard-single.component';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
  selector: 'app-flashcard-landing',
  templateUrl: './flashcard-landing.component.html',
  styleUrls: ['./flashcard-landing.component.scss'],
})
export class FlashcardLandingComponent {
  isList = true;
  set: string;
  @ViewChild(FlashcardListComponent)
  private FlashcardListComponent: FlashcardListComponent;
  @ViewChild(FlashcardSingleComponent)
  private FlashcardSingleComponent: FlashcardSingleComponent;
  
  getFlashcards(deck) {
    this.isList = true;
    this.FlashcardListComponent.getFlashcards(deck);
  }
  switchView(): void {
    if (this.isList) {
      this.isList = false;
    } else {
      this.isList = true;
    }
  }

}
