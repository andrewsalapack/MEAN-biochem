import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
  selector: 'flashcard-single',
  templateUrl: './flashcard-single.component.html',
  styleUrls: ['./flashcard-single.component.css']
})


export class FlashcardSingleComponent implements OnInit {
  deck: Flashcard[];
  frontSideUp: boolean = true;
  currentCard: Flashcard;
  display: string;
  set: string ;
  displayType: string;
  isText: boolean;
  isImage: boolean;

  constructor(private flashcardContentService: FlashcardContentService) { }
  
  nextCardClick(): void {
    if (this.currentCard.position + 1 == this.deck.length) {
      this.currentCard = this.deck[0]
    } else {
    this.currentCard = this.deck[this.currentCard.position + 1]
    }
    this.frontSideUp = true;
    this.display = this.currentCard.frontContent;
    this.displayType = this.currentCard.frontContentType;
  }

  lastCardClick(): void {
      if (this.currentCard.position == 0) {
        this.currentCard =this.deck[this.deck.length - 1]
    } else {
      this.currentCard =this.deck[this.currentCard.position - 1]
    }
    this.frontSideUp = true;  
    this.display = this.currentCard.frontContent;
    this.displayType = this.currentCard.frontContentType;
  }

  cardFlip(): void {
    this.frontSideUp = !this.frontSideUp;
    if (this.frontSideUp) {
      this.display = this.currentCard.frontContent;
      this.displayType = this.currentCard.frontContentType;
      this.typeCheck();
    } else {
      this.display = this.currentCard.backContent;
      this.displayType = this.currentCard.backContentType;
      this.typeCheck();
    }
  }

  typeCheck(): void {
    if (this.displayType == "text") {
      this.isText = true;
      this.isImage = false;
    }
    else {
      this.isText = false;
      this.isImage = true;
    }
  }

  shuffleDeck(): void {
    let m = this.deck.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
      }
    let r = this.deck.length - 1;
      while (r){
        this.deck[r].position = r;
        r--;
      }
    this.currentCard =this.deck[0]
    this.display = this.currentCard.frontContent;
    this.typeCheck();  
    
  }

  getFlashcards(): void {
    this.flashcardContentService.getFlashcards(this.set).then(flashcards => {
      this.deck = flashcards,
      this.currentCard =this.deck[0]
      this.display = this.currentCard.frontContent;
      this.displayType = this.currentCard.frontContentType;
      this.typeCheck();
    });
  }

  getDeck(deck: string): void {
    this.set = deck;
    this.getFlashcards();
  }

  ngOnInit(): void {
        this.set = "AminoAcids";
        this.getFlashcards();
  }
}
