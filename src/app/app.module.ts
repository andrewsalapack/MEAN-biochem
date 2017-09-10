import { NgModule }      from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlashcardContentService } from './flashcard/flashcard-content.service';
import { FlashcardListComponent } from './flashcard/flashcard-list/flashcard-list.component';
import { FlashcardSingleComponent } from './flashcard/flashcard-single/flashcard-single.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { FlashcardLandingComponent } from './flashcard/flashcard-landing/flashcard-landing.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
    FlashcardLandingComponent
  ],
  providers: [FlashcardContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
