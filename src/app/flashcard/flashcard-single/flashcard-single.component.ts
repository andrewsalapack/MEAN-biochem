import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
  selector: 'flashcard-single',
  templateUrl: './flashcard-single.component.html',
  styleUrls: ['./flashcard-single.component.css']
})


export class FlashcardSingleComponent implements OnInit {
  flashcards: Flashcard[];
  frontSideUp: boolean = true;
  currentCard: Flashcard;
  display: string;
  set: string ;

  constructor(private flashcardContentService: FlashcardContentService) { }
  
  cardClick(): void {
    this.frontSideUp = !this.frontSideUp;
  }

  nextCardClick(): void {
    if (this.currentCard.position + 1 == this.flashcards.length) {
      this.currentCard = this.flashcards[0]
    } else {
    this.currentCard = this.flashcards[this.currentCard.position + 1]
    }
    this.frontSideUp = true;
    this.display = this.currentCard.frontContent;
  }

  lastCardClick(): void {
      if (this.currentCard.position == 0) {
        this.currentCard = this.flashcards[this.flashcards.length - 1]
    } else {
      this.currentCard = this.flashcards[this.currentCard.position - 1]
    }
    this.frontSideUp = true;  
    this.display = this.currentCard.frontContent;
  }

  cardFlip(): void {
    this.frontSideUp = !this.frontSideUp;
    if (this.frontSideUp) {
      this.display = this.currentCard.frontContent;
    } else {
      this.display = this.currentCard.backContent;
    }
  }

  getFlashcards(): void {
    this.flashcardContentService.getFlashcards(this.set).then(flashcards => {
      this.flashcards = flashcards,
      this.currentCard = this.flashcards[0]
      this.display = this.currentCard.frontContent;
    });
  }

  ngOnInit(): void {
        this.set = "amino_acids";
        this.getFlashcards();
  }
}
