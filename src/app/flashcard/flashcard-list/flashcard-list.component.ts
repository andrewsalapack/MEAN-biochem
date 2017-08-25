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

  getFlashcards(): void {
    this.flashcardContentService.getFlashcards().then(flashcards => this.flashcards = flashcards);
  }

  ngOnInit(): void {
        this.getFlashcards();
        this.currentCard = this.flashcards;
        console.log(this.currentCard);
  }
}
