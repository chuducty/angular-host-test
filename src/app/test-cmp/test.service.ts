import { Component, OnInit, EventEmitter } from '@angular/core';

export class TestService {
  numCount: number;

  numCountChange = new EventEmitter();
  constructor() {
    this.numCount = 0;

    var self = this;
    setInterval(function() {
      self.numCount++;
      self.numCountChange.emit(self.numCount);
      console.log('from service', self.numCount);
    }, 500);
  }
}
