import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { StoriesService } from "app/stories/strories.service";
import { CatalogueService } from "app/catalogue/catalogue.service";

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.css']
})
export class NewStoriesComponent implements OnInit {
  newStoryForm:FormGroup;
  constructor(
    private catalogueService:CatalogueService,
    private storiesService:StoriesService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.formInit();
  }

  onSubmit(){
    this.router.navigate(['../'],{relativeTo:this.route});
    this.storiesService.saveStoryClicked.emit();
    this.storiesService.addStory(this.newStoryForm.value);
    this.catalogueService.addStorySubject.next(this.newStoryForm.value);
  }

  private formInit(){
    this.newStoryForm=new FormGroup({
      'title':new FormControl(null,Validators.required),
      'description':new FormControl(null,Validators.required)
    })
  }
}
