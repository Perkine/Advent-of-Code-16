var input = 1358;

var map = [[],[,0]];
var target = {x: 31, y: 39};
shortest = null;

walk(1, 1, 0);

var total = map.reduce((t,v) => t + v.reduce((t,v) => t + (v!=null && v < 51 ? 1 : 0), 0), 0);
console.log(total);

function moveTo(x, y, steps){
 if(x < 0 || y < 0)
  return false;
 if(!(y in map))
  map.push([]);
 return !isWall(x, y) && (map[y][x] == null || map[y][x] > steps);
};

function update(x, y, steps){
 map[y][x] = steps + 1;
 walk(x, y, steps + 1);
};

function walk(x, y, steps){
 if(shortest && shortest < steps){
  return
 }
 if(x == target.x && y == target.y){
  console.log('found', steps)
  shortest = steps;
 }

 if(moveTo(x-1, y, steps)){
  ret = update(x-1, y, steps);
 }
 if(moveTo(x+1, y, steps)){
  update(x+1, y, steps);
 }
 if(moveTo(x, y-1, steps)){
  update(x, y-1, steps);
 }
 if(moveTo(x, y+1, steps)){
  update(x, y+1, steps);
 }
};

function isWall(x, y){
 var t = x*x + 3*x + 2*x*y + y + y*y;
 t += input;
 t = t.toString(2);
 t = (''+t).split('').reduce((t, v) =>t+1*v, 0);
 return !!(t%2);
}