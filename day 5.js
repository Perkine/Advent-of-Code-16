var key = 'ojvtpuvg';

function findHash(key, i, zeros){
 var hash;
 var string = new Array(zeros+1).join(0);
 do{
  hash = md5(key + i++);
 } while(!(hash.substr(0, zeros) == string));

 return {hash: hash, index: i};
};

// PART 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
for(var i=0, s=[], ret={index:0}; i<8; i++){
 ret = findHash(key, ret.index, 5);
 s.push(ret.hash.charAt(5));
 console.log(i);
};

console.log(s.join(''));

// PART 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
for(var i=0, s=new Array(8).fill(null), ret={index:0}; i<8;){
 ret = findHash(key, ret.index, 5);
 if(ret.hash.charAt(5) in s && s[ret.hash.charAt(5)] == null){
  s[ret.hash.charAt(5)] = ret.hash.charAt(6);
  console.log('valid',  i, ret.hash.charAt(5));
  i++;
 }
 else console.log('invalid', i, ret.hash.charAt(5));
};

console.log(s.join(''));