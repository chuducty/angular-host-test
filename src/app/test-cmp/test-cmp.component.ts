import { Component, OnInit, EventEmitter } from '@angular/core';
import {TestService} from './test.service';
@Component({
  selector: 'app-test-cmp',
  template: `
    {{display}}
    <button (click)="inc()"> inc </button>
    <button (click)="dec()"> dec </button>

  `
})
export class TestCmpComponent {
  display = 0;
  numCount: number = 0;
  numCountChange = new EventEmitter();
  constructor() {
    var self = this;
    // setInterval(function() {
    //   console.log(this);
    //   self.display += 1;
    // }, 1000);
    //this.numCountChange.subscribe(value=> {this.display = value;});
  }
  inc(){
    this.display += 1;
  }
  dec(){
    this.display -= 1;
  }

}
