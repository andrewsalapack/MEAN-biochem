import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
    selector: 'flashcard-list',
    templateUrl: './flashcard-list.component.html',
    styleUrls: ['./flashcard-list.component.css']
})

export class FlashcardListComponent implements OnInit, OnChanges {
  deck: Flashcard[];
  @Input() setName: string;
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
    this.flashcardContentService.getFlashcards(this.setName).then(flashcards => {
      this.deck = flashcards,
      this.typeCheck();
    });
  }

  ngOnInit(): void {
    this.getFlashcards();
  }

  ngOnChanges(setName: any): void {
    this.getFlashcards();
  }
}