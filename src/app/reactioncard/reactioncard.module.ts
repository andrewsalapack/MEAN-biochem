import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ReactioncardListComponent } from './reactioncard-list/reactioncard-list.component';
import { ReactioncardSingleComponent } from './reactioncard-single/reactioncard-single.component';
import { ReactioncardContentService } from './reactioncard-content.service';
import { ReactioncardLandingComponent } from './reactioncard-landing/reactioncard-landing.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ReactioncardLandingComponent,
        ReactioncardListComponent,
        ReactioncardSingleComponent
    ],
    providers: [
        ReactioncardContentService
    ],
    exports: [
        ReactioncardLandingComponent
    ] 
})
export class ReactioncardModule { }
