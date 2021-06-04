import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {


  data:any;
  constructor() { }


  agInit(params)
  {
this.data=params.value;
  }
  ngOnInit() {
  }

}
