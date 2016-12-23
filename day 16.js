function Disc(positions, start){
 this.positions = positions;
 this.current = start;
}
Disc.prototype.rotate = function(i){
 this.current = (this.current + i) % this.positions;
};

var discs = [
 new Disc(13, 11),
 new Disc(5, 0),
 new Disc(17, 11),
 new Disc(3, 0),
 new Disc(7, 2),
 new Disc(19, 17),
 new Disc(11, 0)
];

// sync
discs.forEach((disc, index) => disc.rotate(index));

var time = 0;

do{
 discs.forEach((disc) => disc.rotate(1));
 if(discs.every((disc) => disc.current == 0))
  break;
} while(++time);

console.log(time);