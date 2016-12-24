var data = String.raw`/* input removed */`;
data = data.split('\n');

var max = 4294967295;

data = data.map(v => {t=v.split('-'); return [parseInt(t[0]), parseInt(t[1]])});
data.sort((a, b) => a[0] - b[0]);

for(var i=0, x=0, c=0; i<data.length; i++){
 if(data[i][0] <= x+1){
  x = data[i][1] > x ? data[i][1] : x;
 }
 else {
  c += data[i][0]-x-1;
//  break;			// break for part 1
  x = data[i][1];
 }
}

console.log(x+1, c+max-x);