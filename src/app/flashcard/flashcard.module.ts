import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { FlashcardContentService } from './flashcard-content.service';
import { FlashcardLandingComponent } from './flashcard-landing/flashcard-landing.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from './flashcard-single/flashcard-single.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FlashcardLandingComponent,
        FlashcardListComponent,
        FlashcardSingleComponent
    ],
    providers: [
        FlashcardContentService
    ],
    exports: [
        FlashcardLandingComponent
    ]
})
export class FlashcardModule { }
