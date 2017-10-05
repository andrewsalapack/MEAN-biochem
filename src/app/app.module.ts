import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { FlashcardContentService } from './flashcard/flashcard-content.service';
import { FlashcardLandingComponent } from './flashcard/flashcard-landing/flashcard-landing.component';
import { FlashcardListComponent } from './flashcard/flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from './flashcard/flashcard-single/flashcard-single.component';
import { ReactioncardLandingComponent } from './reactioncard/reactioncard-landing/reactioncard-landing.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactioncardListComponent } from './reactioncard/reactioncard-list/reactioncard-list.component';
import { ReactioncardSingleComponent } from './reactioncard/reactioncard-single/reactioncard-single.component';
import { ReactioncardContentService } from './reactioncard/reactioncard-content.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FlashcardListComponent,
    FlashcardSingleComponent,
    NavigationBarComponent,
    FlashcardLandingComponent,
    ReactioncardLandingComponent,
    ReactioncardListComponent,
    ReactioncardSingleComponent,
  ],
  providers: [FlashcardContentService,
    ReactioncardContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
