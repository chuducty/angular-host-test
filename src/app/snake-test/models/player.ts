export class Player{
  score;
  constructor(){
    this.score = 0;
  }
  incScore(x){
    this.score += x;
  }
}
