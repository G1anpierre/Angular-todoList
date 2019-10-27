import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  listGroup: string[] = ['Build more Projects with Angular', 'Build more projects with Flexbox and Bootstrap', 'Go to the Gym', 'Dance every now and then'];

  dataInputTyped(dataTyped2: string ) {
    this.listGroup.push(dataTyped2);
  }

  onFinalDelete(itemTodo: string){
    let index = this.listGroup.indexOf(itemTodo);
    console.log(index);
    this.listGroup.splice(index, 1);
  }

  

  constructor() { }

  ngOnInit() {
  }

}
