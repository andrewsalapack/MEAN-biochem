import { Injectable } from '@angular/core';
import { Reactioncard } from './reactioncard';

@Injectable()
export class ReactioncardContentService {
    getReactioncard(reactioncard): Promise<any> {
        return Promise.resolve(reactioncard);
    }
}
