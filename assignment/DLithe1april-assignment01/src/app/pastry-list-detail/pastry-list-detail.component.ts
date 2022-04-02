import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastry-list-detail',
  templateUrl: './pastry-list-detail.component.html',
  styleUrls: ['./pastry-list-detail.component.css']
})
export class PastryListDetailComponent implements OnInit {
@Input() selected_pastry:any;
  constructor() { }

  ngOnInit(): void {
  }

}
