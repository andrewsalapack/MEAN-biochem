import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
    selector: 'FlashcardListComponent',
    templateUrl: './flashcard-list.component.html',
    styleUrls: ['./flashcard-list.component.css']
})

export class FlashcardListComponent implements OnInit {
  deck: Flashcard[];
  set: string;
  displayType: string;
  isText: boolean;
  isImage: boolean;

  constructor(private flashcardContentService: FlashcardContentService) { }
 
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

  getFlashcards(): void {
    this.flashcardContentService.getFlashcards(this.set).then(flashcards => {
      this.deck = flashcards,
      this.typeCheck();
    });
  }

  ngOnInit(): void {
    this.set = "AminoAcids"
    this.getFlashcards();
  }
}