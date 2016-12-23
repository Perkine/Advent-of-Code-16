var tiles = ['.^^^.^.^^^^^..^^^..^..^..^^..^.^.^.^^.^^....^.^...^.^^.^^.^^..^^..^.^..^^^.^^...^...^^....^^.^^^^^^^'];

var rows = 400000;
var s = [];
var t, a, b, c;
var count = 0;

for(var i=0; i<rows-1; i++){
 s = [];
 t = tiles[i];
 for(var j=0; j<t.length; j++){
  a = !t[j-1] || t[j-1] == '.';
  b = t[j] == '.';
  c = !t[j+1] || t[j+1] == '.';
  d = ~[1,3,4,6].indexOf(1*a + 2*b + 4*c);
  if(!d)
   count++;
  s.push(!d ? '.' : '^');
}
 tiles.push(s.join(''))
}

console.log(tiles[0].split('').filter(v => v=='.').length + count);