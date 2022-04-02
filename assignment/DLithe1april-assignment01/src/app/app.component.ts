import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yummy-bakery';
  sel_pastry: any;
  getDetails(pastry_details: any) {
    //console.log(pastry_details);
    this.sel_pastry = pastry_details;
  }
}
