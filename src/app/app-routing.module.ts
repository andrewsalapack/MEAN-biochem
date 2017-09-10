import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlashcardContentService } from './flashcard/flashcard-content.service';
import { FlashcardListComponent } from './flashcard/flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from './flashcard/flashcard-single/flashcard-single.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FlashcardLandingComponent } from './flashcard/flashcard-landing/flashcard-landing.component'

const appRoutes: Routes = [
    {
      path: 'flashcards',
      component: FlashcardLandingComponent
    },
    {
      path: 'flashcardstudy',
      component: FlashcardSingleComponent
    }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
