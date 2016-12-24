var discSpace = 35651584;
var data = '10111011111001111';

console.log('creating data');
while(data.length < discSpace){
tx = new Date
 data = createData(data);
}
console.log('done');

data = data.slice(0, discSpace);

console.log('creating checksum');
while(!(data.length % 2)){
 data = checksum(data);
}
console.log('done', data);

function createData(a){
 var b = [];
 for(var i=0; i<a.length; i++)
  b.push(~~!~~a[i]);
 return a + '0' + b.reverse().join('');
};

function checksum(data){
 var res = [];
 for(var i=0; i<data.length; i++){
  res.push(1 * (data[i] == data[++i]));
 }
 return res.join('');
};