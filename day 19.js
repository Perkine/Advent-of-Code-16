var inp = 3014603;
inp = 9
var c = inp;
var elves = Array(inp).fill(1);

var s = [];

while(c > 1){
 for(var i=0; i<elves.length; i++){
  if(elves[i] == 0)
   continue;
  s.push(i);
  if(s.length == 2){
   elves[s[0]] += elves[s[1]];
   elves[s[1]] = 0;
   s = [];
   c--;
  }
 }
 console.log(c)
}
console.log(elves.indexOf(inp)+1);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function findElf(inp){
 var elves = [];
 for(var i=0; i<inp;)
  elves.push(++i);

 while(elves.length > 1){
  for(var i=0,t; i<elves.length; i++){
   t = (i + Math.floor(elves.length / 2)) % elves.length;
   if(t<i) i--
   elves.splice(t, 1)
  }
 }
 return elves[0];
}

for(var i=1; i<200; i++)
 console.log(i, findElf(i))

//////////////////////////////////////
 1  1	
 2  1	3^0
 3  3	3^1
 4  1
 5  2
 6  3	@(2 * 3^1) 3^1
 7  5
 8  7
 9  9	3^2
10  1
.. +1
18  9	@(2 * 3^2)  3^2
.. +2
27 27	3^3
.. +1
54 27	@(2 * 3^3) 3^3
.. +2
81 81	3^4
.. +1
162 81	@(2 * 3^4) 3^4
//////////////////////////////////////

elves = 3014603;

if(elves < 2 * 3^13)
 res = elves - 3^13;
else
 res = 3^13 + 2 * (elves - 2*3^13);
*/