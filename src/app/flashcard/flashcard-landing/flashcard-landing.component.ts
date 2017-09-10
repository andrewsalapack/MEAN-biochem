import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FlashcardListComponent } from '../flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from '../flashcard-single/flashcard-single.component';

@Component({
  selector: 'app-flashcard-landing',
  templateUrl: './flashcard-landing.component.html',
  styleUrls: ['./flashcard-landing.component.scss'],
})
export class FlashcardLandingComponent {
  listOrSingle = true;

  @ViewChild(FlashcardListComponent)
  //@ViewChild(FlashcardSingleComponent)
  
  private FlashcardListComponent: FlashcardListComponent;
  //private FlashcardSingleComponent: FlashcardSingleComponent;
  
  getFlashcards(deck) {
    this.FlashcardListComponent.getFlashcards(deck)
    debugger
  }

  switchListSingle(): void {
    if (this.listOrSingle) {
      this.listOrSingle = false;
    } else {
      this.listOrSingle = true;
    }
  }

}
