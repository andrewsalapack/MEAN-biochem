import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FlashcardListComponent } from '../flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from '../flashcard-single/flashcard-single.component';

@Component({
  selector: 'app-flashcard-landing',
  templateUrl: './flashcard-landing.component.html',
  styleUrls: ['./flashcard-landing.component.scss'],
})
export class FlashcardLandingComponent implements OnInit {
  isList = true;
  setName: string;
  buttonName: string;

  chooseSet(setName): void {
    this.setName = setName;
    console.log(this.setName)
  }

  switchView(): void {
    if (this.isList) {
      this.isList = false;
      this.buttonName = "View Deck";
    } else {
      this.isList = true;
      this.buttonName = "Study";
    }
  }

  ngOnInit() {
    this.setName = "AminoAcids";
    this.buttonName = "Study";
  }
}
