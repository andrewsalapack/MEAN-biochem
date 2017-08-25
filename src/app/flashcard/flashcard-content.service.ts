import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard';
import { Flashcards } from './mock-flashcard-content';
import { AminoAcids } from './content-data/amino-acids/amino-acids.data'; 

@Injectable()
export class FlashcardContentService {
    getFlashcards(flashcardset): Promise<any> {
        return Promise.resolve(flashcardset);
    }
}
