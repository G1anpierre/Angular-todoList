import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
