var data = String.raw`/* input removed */`;

data = data.split('\n');

var count = data.reduce(function(count, line) {
 line = line.split(/\s+/).sort((a, b) => a-b);
 return (Number(line[1]) + Number(line[2]) > Number(line[3])) ? ++count : count;
}, 0);

console.log(count);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

count = 0

for(var I=0, a,b,c,d,e,f,g,h,i; I<data.length;){
 var prep = (arr) => arr.split(/\s+/).slice(1);
 var isPossible = (arr) => Number(arr[0]) + Number(arr[1]) > Number(arr[2]);
 var compare = (a, b) => a-b;

 [a,b,c,d,e,f,g,h,i] = [].concat(prep(data[I++]), prep(data[I++]), prep(data[I++]));

 isPossible([a,d,g].sort(compare)) && count++;
 isPossible([b,e,h].sort(compare)) && count++;
 isPossible([c,f,i].sort(compare)) && count++;
};

console.log(count);

// 982 1826