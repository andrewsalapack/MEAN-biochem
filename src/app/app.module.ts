import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlashcardModule } from './flashcard/flashcard.module';
import { ReactioncardModule } from './reactioncard/reactioncard.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    FlashcardModule,
    ReactioncardModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
