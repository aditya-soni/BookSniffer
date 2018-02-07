import { Component, OnInit } from '@angular/core';
import { CatalogueModel } from "app/catalogue/catalogue.model";
import { CatalogueService } from "app/catalogue/catalogue.service";

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  catalogues:CatalogueModel[];

  constructor(
    private catalogueService:CatalogueService
  ) { }

  ngOnInit() {
    this.catalogues=this.catalogueService.getCatalogue();
    this.catalogueService.catalogueChanged.subscribe(
      (catalogue:CatalogueModel[])=>{
        this.catalogues=catalogue
      }
    )
  }

}
