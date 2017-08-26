import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardContentService } from '../flashcard-content.service';

@Component({
    selector: 'flashcard',
    templateUrl: './flashcard-list.component.html'
})

export class FlashcardListComponent{
  deck: Flashcard;
}

