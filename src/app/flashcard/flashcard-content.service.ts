import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard';
import { AminoAcids_Name_Structure } from './content-data/amino-acids/amino-acids.data'; 
import { AminoAcids_3letter_NameSingle } from './content-data/amino-acids/amino-acids.data'; 
import { AminoAcids_Single_Name3letter } from './content-data/amino-acids/amino-acids.data'; 


@Injectable()
export class FlashcardContentService {
    getFlashcards(flashcardset): Promise<any> {
        if (flashcardset == 'AminoAcids') {
            return Promise.resolve(AminoAcids_Name_Structure);
        }
        else if (flashcardset == 'AminoAcids1') {
            return Promise.resolve(AminoAcids_3letter_NameSingle);
        }
        else if (flashcardset == 'AminoAcids2') {
            return Promise.resolve(AminoAcids_Single_Name3letter);
        }
        else {
            return Promise.resolve(AminoAcids_Name_Structure);
        }
    }
//    getFlashcardSets(): Promise<any> {

//    }
}
