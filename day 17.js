var key = 'dmypynyp';
x = 0;
y = 0;
var shortest = null;
var longest = 0;

var res = move(key, 0, 0, 0);
console.log('done', shortest, longest, res);

function move(key, x, y, steps){
 var res;
/*
 if(shortest && shortest < steps){
  return false
 }
*/
 if(x == 3 && y == 3){
  shortest = steps;
  steps > longest && (longest = steps);
  return key;
 }
 var dir = getDirections(key, x, y);

 if(dir.u){
  res = move(key + 'U', x, y - 1, steps + 1);
 }
 if(dir.d){
  res = move(key + 'D', x, y + 1, steps + 1);
 }
 if(dir.l){
  res = move(key + 'L', x - 1, y, steps + 1);
 }
 if(dir.r){
  res = move(key + 'R', x + 1, y, steps + 1);
 }
 return res;
};

function getDirections(key, x, y){
 function isOpen(x, y, char){
  var hash = md5(key);
  if(x<0 || x>3 || y<0 || y>3 || !~'bcdef'.indexOf(hash[char])){
   return false;
  }
  return true;
 };

 return {
  u: isOpen(x, y - 1, 0),
  d: isOpen(x, y + 1, 1),
  l: isOpen(x - 1, y, 2),
  r: isOpen(x + 1, y, 3)
 };
};