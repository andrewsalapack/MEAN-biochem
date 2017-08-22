import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard';
import { Flashcards } from './mock-flashcard-content';

@Injectable()
export class FlashcardContentService {
    getFlashcards(): Promise<Flashcard[]> {
        return Promise.resolve(Flashcards);
    }
}
