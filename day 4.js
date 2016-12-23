var data = String.raw`/* input removed */`;

data = data.split('\n');

var sum = data.reduce(checkRoom, 0);
console.log(sum);

function checkRoom(sum, room) {
 var re, match, name, str, id, checksum, o = [], topFive, letters = 'abcdefghijklmnopqrstuvwxyz';
 re = /([\w-]+?)(\d+)\[(\w{5})\]/;
 [match, name, id, checksum] = room.match(re);

 str = name.split('').sort();

 for(var i=0, currentLetter, a,b, amount; i<letters.length; i++){
  currentLetter = letters[i];
  a = str.indexOf(currentLetter);
  b = str.lastIndexOf(currentLetter);
  amount = ~a && (b - a + 1);
  o.push([currentLetter, amount]);
 }
 
 o.sort((a,b) => b[1] - a[1] || (a[0] > b[0] ? 1 : -1));
 topFive = o.slice(0,5).map(v => v[0]);

	if(topFive.join('') == checksum && decrypt(name, id).match(/north/g))
	  console.log(match, name, id, checksum, topFive.join(''), topFive.join('') == checksum, decrypt(name, id));

 return sum += topFive.join('') == checksum ? Number(id) : 0;
};

function decrypt(input, offset){
 var letters = 'abcdefghijklmnopqrstuvwxyz';
 var output = '';
 for(var i=0, t; i<input.length; i++){
  t = (letters.indexOf(input[i]) + offset % 26) % 26;
  output += ~letters.indexOf(input[i]) ? letters[t] : ' ';
 }
 return output;
};