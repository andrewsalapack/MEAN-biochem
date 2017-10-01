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

  chooseSet(setName): void {
    this.setName = setName;
    console.log(this.setName)
  }

  switchView(): void {
    if (this.isList) {
      this.isList = false;
    } else {
      this.isList = true;
    }
  }

  ngOnInit() {
    this.setName = "AminoAcids";
  }
}
