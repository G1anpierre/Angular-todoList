import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  @Input() receivedGroup: string[];
  @Output() item = new EventEmitter<string>();

  onDeleteItem(itemToDelete: string) {
    console.log(itemToDelete);
    
    this.item.emit(itemToDelete);
  }


  constructor() { }

  ngOnInit() {
  }

}
