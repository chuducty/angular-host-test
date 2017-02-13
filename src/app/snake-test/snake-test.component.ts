import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Snake } from './models/snake';
import { Apple } from './models/apple';
import { Player } from './models/player';
@Component({
  selector: 'app-snake-test',
  templateUrl: './snake-test.component.html',
  styleUrls: ['./snake-test.component.css']
})
export class SnakeTestComponent implements OnInit {
  @ViewChild('mycanvas') canvasRef: ElementRef;
  @ViewChild('eat') eat: ElementRef;
  @ViewChild('losing') losing: ElementRef;
  canvas: any;
  ctx: any;
  snake: Snake;
  apple: Apple;
  player: Player;
  blockSize: any;
  timer;
  frameLength;
  score = 'Press Space to play';
  keysToDirections = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event:KeyboardEvent) {
    // do something meaningful with it
    //console.log(`The user just pressed ${event.keyCode}!`);
    var key = event.keyCode;
    //console.log(this);
    var direction = this.keysToDirections[key];

    if (direction){
      this.snake.setDirection(direction);
    }
    if (key == 32){
        this.init();
    }
  }

  constructor() { }

  ngOnInit() {
    //console.log(this.canvasRef);
    this.canvas = this.canvasRef.nativeElement;
    this.canvas.width = 300;
    this.canvas.height = 300;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'black';
    this.blockSize = 10;
    this.frameLength = 100;

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.eat.nativeElement.load();
    this.losing.nativeElement.load();
    // models
    // this.snake = new Snake(this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
    // this.apple = new Apple(this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
    // this.player = new Player();
    // this.timer = setInterval(this.gameLoop.bind(this),this.frameLength);

  }
  init(){
    if (this.timer){
      clearInterval(this.timer);
    }
    this.snake = new Snake(this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
    this.apple = new Apple(this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
    this.player = new Player();
    this.timer = setInterval(this.gameLoop.bind(this),this.frameLength);
  }
  gameLoop(){
    //console.log(this);
    if (this.is_winner()){
      this.score = 'You win';
      clearInterval(this.timer);
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.move();
    this.snake.draw(false);
    this.apple.draw();
    this.score = this.player.score;
    if (this.snake.checkCollision('apple',this.apple)){
      //console.log('ahihi');
      this.player.incScore(10);
      //this.eat.nativeElement.play();
      this.snake.grow();
      this.apple.move(this.snake);

    }
    if (this.snake.checkCollision('snake',{})){
      //console.log('ahah');
      this.score = 'You lose. Your score is: ' + this.score;
      //this.losing.nativeElement.play();
      this.snake.draw('blue');
      clearInterval(this.timer);
    }
  }
  is_winner(){
    return this.snake.posArray.length === (this.canvas.width / this.blockSize) * (this.canvas.height / this.blockSize);

  }
}
