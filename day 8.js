var data = String.raw`/* input removed */`;

data = data.split('\n');

var screenX = 50;
var screenY = 6;

var screen = Array.apply(null, Array(screenY)).map(function(){return Array.apply(null, Array(screenX)).fill(' ')});

function rect(a, b){
 for(var y=0; y<b; y++)
  for(var x=0; x<a; x++)
   screen[y][x] = '#';
};

function rotateRow(a, b){
 screen[a] = (screen[a].splice(-b%screenX, b%screenX)).concat(screen[a]);
};

function rotateCol(a, b){
 var temp = [];
 for(var i=0; i< screenY; i++){
  temp.push(screen[i][a]);
 }
 temp = (temp.splice(-b%screenY, b%screenY)).concat(temp);
 for(var i=0; i< screenY; i++){
  screen[i][a] = temp[i];
 }
};


function process(line){
 if(/rect (\d+)x(\d+)/.test(line)){
  rect(RegExp.$1, RegExp.$2);
 }
 if(/rotate row y=(\d+) by (\d+)/.test(line)){
  rotateRow(RegExp.$1, RegExp.$2);
 }
 if(/rotate column x=(\d+) by (\d+)/.test(line)){
  rotateCol(RegExp.$1, RegExp.$2);
 }
};

data.forEach(process);
var total = screen.reduce((total, row) => total += row.reduce((total, value) => total += value == '#' ? 1 : 0, 0), 0);

console.log(total);
screen.forEach(row => console.log(row.join('')));