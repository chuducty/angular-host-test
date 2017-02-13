export class Apple {
  blockSize;
  ctx;
  color;
  cwidth;
  cheight;
  position;
  constructor(ctx, blockSize, cwidth, cheight){
    this.position = [0,0];
    this.color = 'blue';
    this.ctx = ctx;
    this.blockSize = blockSize;
    this.cwidth = cwidth;
    this.cheight = cheight;
  }
  draw(){
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;

    var radius = this.blockSize / 2;
    var x = this.position[0] * this.blockSize + radius;
    var y = this.position[1] * this.blockSize + radius;
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    this.ctx.fill();
  }
  move(snake){
    var check;
    while (true) {
        check = true;
        var newX = Math.floor(Math.random() * (this.cwidth / this.blockSize));
        var newY = Math.floor(Math.random() * (this.cheight / this.blockSize));
        this.position = [newX, newY];
        for (var i = 0; i < snake.posArray.length; i++) {
            if (!snake.posArray) {
                console.log('debug');
                console.log(snake);
                console.log(snake.posArray)
            }
            if (newX === snake.posArray[i][0] && newY === snake.posArray[i][1]) {
                check = false;
                break;
            }
        }
        if (check) {
            return;
        }
    }

  }
}
