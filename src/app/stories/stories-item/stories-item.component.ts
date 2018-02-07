import { Component, OnInit, Input } from '@angular/core';
import { CatalogueService } from "app/catalogue/catalogue.service";

@Component({
  selector: 'app-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.css']
})
export class StoriesItemComponent implements OnInit {
  @Input() storiesItem;
  constructor(
    private catalogueService:CatalogueService
  ) { }

  ngOnInit() {
  }

  onAddStoryToCatalogue(){
    this.catalogueService.addStorySubject.next(this.storiesItem)
  }
}
