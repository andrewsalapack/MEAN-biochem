import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FlashcardContentService } from './flashcard-content.service';
import { FlashcardComponent } from './flashcard.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FlashcardComponent
  ],
  providers: [FlashcardContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
