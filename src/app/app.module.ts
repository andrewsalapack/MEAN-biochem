import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlashcardContentService } from './flashcard/flashcard-content.service';
import { FlashcardListComponent } from './flashcard/flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from './flashcard/flashcard-single/flashcard-single.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'flashcardlist',
        component: FlashcardListComponent
      },
      {
        path: 'flashcardsingle',
        component: FlashcardSingleComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FlashcardListComponent,
    FlashcardSingleComponent
  ],
  providers: [FlashcardContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
