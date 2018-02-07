import { Story } from "app/stories/stories.model";
import { Subject } from "rxjs/Subject";
import { EventEmitter } from "@angular/core";

export class StoriesService {
    saveStoryClicked=new EventEmitter<void>();
    storiesChanged=new Subject<Story[]>();

    private stories:Story[]=[
        new Story(
            'Story title 1',
            'story one description'
        ),
        new Story(
            'Story title 2',
            'story 2 description'
        ),
        new Story(
            'Story title 3',
            'story 3 description'
        ),
    ];

    getStories(){
        return this.stories.slice();
    }

    addStory(newStory:Story){
        this.stories.push(newStory);
        this.storiesChanged.next(this.stories.slice());
    }
}