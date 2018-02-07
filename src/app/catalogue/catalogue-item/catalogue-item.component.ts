import { Component, OnInit, Input } from '@angular/core';
import { CatalogueModel } from "app/catalogue/catalogue.model";

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.css']
})
export class CatalogueItemComponent implements OnInit {
  @Input() catalogueItem:CatalogueModel;

  constructor() { }

  ngOnInit() {
  }

}
