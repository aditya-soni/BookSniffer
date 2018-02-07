import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFeature:string='catalogue';

  navigateTo(e:string){
    this.showFeature=e;
    console.log(this.showFeature);
  }

}
