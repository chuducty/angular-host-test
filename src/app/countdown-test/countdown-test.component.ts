import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-test',
  templateUrl: './countdown-test.component.html',
  styleUrls: ['./countdown-test.component.css']
})
export class CountdownTestComponent implements OnInit {
  total_time;
  is_start: false;
  minute_A = 0;
  minute_B = 0;
  second_A = 0;
  second_B = 0;
  is_finish = false;
  constructor() { }

  ngOnInit() {
  }

  startCountDown(){
    this.is_finish = false;
    var time = (this.get_minute()*60 + this.get_second()) * 1000;
    var x = setInterval(() => {
      this.second_B -= 1 ;
      if (this.second_B < 0){
        this.second_A -= 1;
        this.second_B = 9;
      }
      if (this.second_A < 0){
        this.minute_B -= 1;
        this.second_A = 5;
        this.second_B = 9;
      }
      if (this.minute_B < 0){
        this.minute_A -= 1;
        this.minute_B = 9;
        this.second_A = 5;
        this.second_B = 9;
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(x);
      //console.log('finished')
      this.is_finish = true;
    }, time);

  }
  get_minute(){
    // +string -> number (unary operator)

    return +(this.minute_A + this.minute_B);

  }
  get_second(){
    // +string -> number (unary operator)
    return +(this.second_A + this.second_B);
  }


}
