import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard';
import { Flashcards } from './mock-flashcard-content';
import { AminoAcids } from './content-data/amino-acids/amino-acids.data'; 

@Injectable()
export class FlashcardContentService {
    getFlashcards(flashcardset): Promise<any> {
        if (flashcardset == 'AminoAcids') {
            return Promise.resolve(AminoAcids[0]);
        }
        else {
            return Promise.resolve(Flashcards);
        }
    }
}
