import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StoriesService } from "app/stories/strories.service";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  editMode=false;
  constructor(
    private storiesService:StoriesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.storiesService.saveStoryClicked.subscribe(
      ()=>{
        this.editMode=false;
      }
    )
  }

  onAddStory(){
    this.router.navigate(['/',{outlets:{story:'story-add'}}]);
    this.editMode=true;
  }
}
