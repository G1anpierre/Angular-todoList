import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  @Input() receivedGroup: string[];



  constructor() { }

  ngOnInit() {
  }

}
