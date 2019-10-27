import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  listGroup: string[] = ['example1', 'example2'];

  dataInputTyped(dataTyped2: string ) {
    this.listGroup.push(dataTyped2);
  }

  constructor() { }

  ngOnInit() {
  }

}
