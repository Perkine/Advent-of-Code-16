var data = String.raw`/* input removed */`;

data = data.split('\n');

var count;
var letters = 'abcdefghijklmnopqrstuvwxyz';

for(var i=0; i<data[0].length; i++){
 count = Array.apply(null, Array(26)).map(function(){ return {letter: '', val: 0}});
 for(var j=0, letter, index; j<data.length; j++){
  letter = data[j][i];
  index  = letters.indexOf(letter);
  count[index].letter = letter;
  count[index].val++;
 }
 console.log( findMostCommon(count) );
}

function findMostCommon(arr){
 arr.sort((a, b) => b.val - a.val);
 return arr[25].letter;			// arr[0].letter; for part A
};