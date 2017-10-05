import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactioncardSingleComponent } from '../reactioncard-single/reactioncard-single.component';
import { ReactioncardListComponent } from '../reactioncard-list/reactioncard-list.component';
@Component({
    selector: 'app-reactioncard-landing',
    templateUrl: './reactioncard-landing.component.html',
    styleUrls: ['./reactioncard-landing.component.scss'],
})
export class ReactioncardLandingComponent implements OnInit {
    isList = true;
    buttonName: string;

    switchView(): void {
        if (this.isList) {
          this.isList = false;
          this.buttonName = "View Deck";
        } else {
          this.isList = true;
          this.buttonName = "Study";
        }
      }

    ngOnInit(){
        this.buttonName = "Study";
    }
}