import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
    selector: 'flashcard',
    templateUrl: './flashcard-list.component.html'
})

export class FlashcardListComponent implements OnInit {
  flashcards: Flashcard[];
  frontSideUp: boolean = true;
  currentCard: Flashcard[];
  display: string;

  constructor(private flashcardContentService: FlashcardContentService) { }
  
  cardClick(): void {
    this.frontSideUp = !this.frontSideUp;
  }

//   nextCardClick(): void {
//     if (this.currentCard.position + 1 == this.flashcards.length) {
//       this.currentCard = this.flashcards[0]
//     } else {
//     this.currentCard = this.flashcards[this.currentCard.position + 1]
//     }
//     this.frontSideUp = true;
//   }

//   lastCardClick(): void {
//       if (this.currentCard.position == 0) {
//         this.currentCard = this.flashcards[this.flashcards.length - 1]
//     } else {
//       this.currentCard = this.flashcards[this.currentCard.position - 1]
//     }
//     this.frontSideUp = true;  
//   }

//   cardFlip(): void {
//     this.frontSideUp = !this.frontSideUp;
//     if (this.frontSideUp) {
//       this.display = this.currentCard.frontContent;
//     } else {
//       this.display = this.currentCard.backContent;
//     }
//   }

  getFlashcards(): void {
    this.flashcardContentService.getFlashcards().then(flashcards => this.flashcards = flashcards);
    this.flashcards = this.flashcards;
  }

  ngOnInit(): void {
        this.getFlashcards();
        this.currentCard = this.flashcards;
        console.log(this.currentCard);
  }
}
