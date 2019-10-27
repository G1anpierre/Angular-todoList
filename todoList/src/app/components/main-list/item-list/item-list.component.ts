import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() input: string;
  @Output() delete = new EventEmitter<void>();
  @Output() done = new EventEmitter<boolean>();
  isClick: boolean = false;

  onDelete() {
    this.delete.emit();
  }

  onDone() {
    this.isClick = !this.isClick;
    this.done.emit(this.isClick);
  }

  

  
  constructor() { }

  ngOnInit() {
  }

}
