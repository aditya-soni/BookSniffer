import { Component, OnInit } from '@angular/core';
import { Story } from "app/stories/stories.model";
import { StoriesService } from "app/stories/strories.service";

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {
  
  stories:Story[];

  constructor(private storiesService:StoriesService) { }

  ngOnInit() {
    this.stories=this.storiesService.getStories();
    this.storiesService.storiesChanged.subscribe(
      (stories)=>{
        this.stories=stories
      }
    )
  }

}
