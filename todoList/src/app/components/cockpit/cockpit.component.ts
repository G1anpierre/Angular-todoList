import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  
  @Output() inputTyped = new EventEmitter<string>();

  onClick(dataTyped: string){
    console.log(dataTyped);
    this.inputTyped.emit(dataTyped);
  }


  constructor() { }

  ngOnInit() {
  }

}
