var key = 'yjdafjpo';
var i = 0;
var keys = [];
var valid = [];
var count = 0;
var hash;
var stretch = false;

do{
 hash = md5(key + i);
 if(stretch)
  for(var x=0; x<2016; x++)
   hash = md5(hash);

 if(/(\w)\1\1/.test(hash)){
  keys[i] = RegExp.$1;
  //console.log(i, hash, RegExp.$1);
 }

 if(/(\w)\1\1\1\1/.test(hash)){
  console.log(i, hash, RegExp.$1, Math.max(0, i-999));
  count += keys.slice(Math.max(0, i-1000), i).filter(v => v == RegExp.$1).length;
  console.log(count);
 }

 if(count > 63){
  getIndex(keys, count, RegExp.$1);
  break;
 }
} while(++i);

function getIndex(keys, count, char){
 for(var i=count; i>=63; i--){
   console.log(keys.lastIndexOf(char));
   delete keys[keys.lastIndexOf(char)];
 }
};

