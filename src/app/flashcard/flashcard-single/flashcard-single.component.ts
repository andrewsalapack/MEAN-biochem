import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
  selector: 'flashcard-single',
  templateUrl: './flashcard-single.component.html',
  styleUrls: ['./flashcard-single.component.css']
})


export class FlashcardSingleComponent implements OnInit, OnChanges {
  deck: Flashcard[];
  frontSideUp: boolean = true;
  currentCard: Flashcard;
  display: string;
  set: string;
  @Input() setName: string;
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
    console.log(this.currentCard.position);
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
    console.log(this.currentCard.position);
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
    let r = this.deck.length;
      while (r){
        this.deck[r - 1].position = r - 1;
        r--;
      }
    this.currentCard = this.deck[0]
    this.display = this.currentCard.frontContent;
    this.typeCheck();  
    console.log(this.deck)
  }

  getFlashcards(): void {
    this.flashcardContentService.getFlashcards(this.setName).then(flashcards => {
      this.deck = flashcards,
      this.currentCard =this.deck[0]
      this.display = this.currentCard.frontContent;
      this.displayType = this.currentCard.frontContentType;
      this.typeCheck();
      console.log(this.deck);
    });
  }

  ngOnInit(): void {
        this.set = this.setName
        this.getFlashcards();
  }

  ngOnChanges(setName: any) {
    this.getFlashcards();
  }
}
