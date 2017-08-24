import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FlashcardContentService } from './flashcard/flashcard-content.service';
import { FlashcardListComponent } from './flashcard/flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from './flashcard/flashcard-single/flashcard-single.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FlashcardListComponent,
    FlashcardSingleComponent
  ],
  providers: [FlashcardContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
