import { Component, OnInit } from '@angular/core';
import { Flashcard } from './flashcard';
import { FlashcardContentService } from './flashcard-content.service';

@Component({
    selector: 'flashcard',
    templateUrl: './flashcard.component.html'
})

export class FlashcardComponent implements OnInit {
    flashcards: Flashcard[];

    constructor(private flashcardContentService: FlashcardContentService) { }

    getFlashcards(): void {
        this.flashcardContentService.getFlashcards().then(flashcards => this.flashcards = flashcards);
    }

    ngOnInit(): void {
        this.getFlashcards();
    }
}