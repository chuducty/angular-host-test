export class Snake{
  posArray;
  blockSize;
  ctx;
  color;
  cwidth;
  cheight;
  direction;
  constructor(ctx, blockSize, cwidth, cheight){
    this.ctx = ctx;
    this.blockSize = blockSize;
    this.cwidth = cwidth;
    this.cheight = cheight;
    this.color = 'red';
    this.direction = 'right';
    this.posArray = [];
    this.posArray.push([6, 4]);
    this.posArray.push([5, 4]);
    this.posArray.push([4, 4]);
  }
  move(){
    var nextPosition = this.posArray[0].slice();
    switch (this.direction) {
        case 'left':
            nextPosition[0] -= 1;
            break;
        case 'up':
            nextPosition[1] -= 1;
            break;
        case 'right':
            nextPosition[0] += 1;
            break;
        case 'down':
            nextPosition[1] += 1;
            break;
        default:
            throw ('Invalid direction');

    }
    // in case out of canvas
    //console.log(nextPosition);
    if (nextPosition[0] < 0) {
        nextPosition[0] = (this.cwidth / this.blockSize) - 1;
    }
    if (nextPosition[1] < 0) {
        nextPosition[1] = (this.cheight / this.blockSize) - 1;
    }
    if (nextPosition[0] >= this.cwidth / this.blockSize) {
        //console.log('ahihi');
        nextPosition[0] = 0;
    }
    if (nextPosition[1] >= this.cheight / this.blockSize) {
        nextPosition[1] = 0;
    }
    this.posArray.unshift(nextPosition); // push to the beginning of the array;
    this.posArray.pop();
  }

  drawSection(pos){
    var x = pos[0] * this.blockSize;
    var y = pos[1] * this.blockSize;
    this.ctx.fillRect(x, y, this.blockSize, this.blockSize);
  }

  draw(color){
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    if (color){
      this.ctx.fillStyle = color;
    }
    for(var i = 0; i < this.posArray.length; i++) {
      this.drawSection(this.posArray[i]);
    }
  }

  setDirection(newDirection){
    var allowedDirections;
    switch (this.direction) {
        case 'left':
        case 'right':
            allowedDirections = ['up', 'down'];
            break;
        case 'up':
        case 'down':
            allowedDirections = ['left', 'right'];
            break;
        default:
            throw ('Invalid direction');
    }
    if (allowedDirections.indexOf(newDirection) > -1) {
        //console.log('ahihi');
        this.direction = newDirection;
    }
  }

  checkCollision(type, obj){
    var result = false;
    if (type === 'apple'){
      //console.log('ahihi');
      //console.log(this.posArray[0])
      if (this.posArray[0][0] === obj.position[0] && this.posArray[0][1] == obj.position[1]){
        //console.log('ahihi');
        return true;
      }
    }
    if (type === 'snake'){
      for (var i = 1; i < this.posArray.length; i++){
        if (this.posArray[0][0] === this.posArray[i][0] && this.posArray[0][1] === this.posArray[i][1]){
          console.log('ahihi');
          return true;
        }
      }
    }
    return false;

  }

  checkPos(a1,a2){
    var x;
    var y;
    if (a1[0] === a2[0] && a1[1] === a2[1] + 1) {
        x = a1[0];
        y = a1[1] + 1;
        return [x, y];
    }
    // a2 is at bottom of a1
    if (a1[0] === a2[0] && a1[1] + 1 === a2[1]) {
        x = a1[0];
        y = a1[1] - 1;
        return [x, y];
    }

    // a2 is at left of a1
    if (a1[0] === a2[0] + 1 && a1[1] === a2[1]) {
        x = a1[0] + 1;
        y = a1[1];
        return [x, y];
    }

    // a2 is at right of a1
    if (a1[0] + 1 === a2[0] && a1[1] === a2[1]) {
        x = a1[0] - 1;
        y = a1[1];
        return [x, y];
    }

  }

  grow(){
    var last = this.posArray.length - 1;
    this.posArray.push(this.checkPos(this.posArray[last], this.posArray[last-1]));

  }

}
