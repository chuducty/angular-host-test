import { Component, OnInit, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ThuanMethods} from '../my-functions';
@Component({
  selector: 'app-clock-test',
  template: `
    <div style="margin:30px;">
    <h1>{{ time }}</h1>
    </div>

  `,
  styleUrls: ['./clock-test.component.css']
})
export class ClockTestComponent implements OnInit {
  time: any = 'loading....';
  test: any;

  testChange = new EventEmitter();
  public getTime(obj:any){
    // console.log(obj);
    // console.log('ahihi');
    // console.log(this.testChange);
    let new_time = new Date();
    console.log(new_time);
    //console.log(obj.testChange);

    obj.testChange.emit(ThuanMethods.HHMMSSGMT(new_time));
    //console.log('ahihi',obj.testChange);
  }
  constructor() {
    var timer = Observable.interval(1000);
    timer.subscribe(t => {
      let new_time = new Date();
      console.log(new_time);
      this.time = ThuanMethods.HHMMSSGMT(new_time);

    });

    //var self = this;
    // setInterval(function(){
    //     let new_time = new Date();
    //     console.log(new_time);
    //     self.testChange.emit(ThuanMethods.HHMMSSGMT(new_time));
    // },1000);

    // var self = this;
    // setInterval(function(){
    //   let new_time = new Date();
    //   self.time = ThuanMethods.HHMMSSGMT(new_time);
    // },1000)

    // setInterval(function(){self.getTime(self)},1000);
    // this.testChange.subscribe(value=> {this.time = value; console.log(value)});
  }

  ngOnInit() {

  }

}
