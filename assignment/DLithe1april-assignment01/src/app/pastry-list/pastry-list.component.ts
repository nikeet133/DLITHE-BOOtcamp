import { Component, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { EventEmitter } from '@angular/core';
import { pastries } from 'src/pastries_mock';


@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.css']
})
export class PastryListComponent implements OnInit {
  li=pastries;

  @Output () passDataToApp=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnClickBtn(list:any) {
    //console.log(list);
    this.passDataToApp.emit(list)
  }
}