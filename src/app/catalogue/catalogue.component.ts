import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  mode='main';
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe(
      (e)=>{
        if (e instanceof NavigationEnd) {
          if (e.url==='/new') {
            this.mode='edit';
          } else{
            this.mode='main'
          }
        }
      }
    )
  }

  onNewCatalogue(){
    this.router.navigate(['/new']);
  }
}
