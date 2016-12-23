<script>

var data = '/* input removed */';

console.log(processA(data)); // 102229
console.log(processB(data)); // 10780403063

// PART 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function processA(data) {
 var a,b,c;
 var re = /\((\d+)x(\d+)\)/g;

 while((result = re.exec(data)) !== null){
  a = data.slice(0, result.index);
  b = data.slice(re.lastIndex, re.lastIndex + 1*RegExp.$1).repeat(RegExp.$2);
  c = data.slice(re.lastIndex + 1*RegExp.$1);

  data = ''.concat(a,b,c);
  re.lastIndex = result.index + RegExp.$1 * RegExp.$2;
 }
 return data.length;
};

// PART 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function processB(data) {
 var weight = Array(data.length).fill(1);
 var total = 0;
 var prev = 0;
 var re = /\((\d+)x(\d+)\)/g;

 while((result = re.exec(data)) !== null){
  for(var i=re.lastIndex; i<re.lastIndex + 1*RegExp.$1; i++)
   weight[i] *= RegExp.$2;

  total += weight.slice(prev, result.index).reduce((total, value) => total += value, 0);
  prev = re.lastIndex;
 }
 return total + weight.slice(prev).reduce((total, value) => total += value, 0);
};

</script>