var data = 'R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1';
data = data.split(', ');

var N = 'N', E = 'E', S = 'S', W = 'W';
var dir = N;
var loc = [0, 0];

var changeDir = {
 L: {N: W, E: N, S: E, W: S},
 R: {N: E, E: S, S: W, W: N}
};


data.forEach(function(value){
 /(.)(.+)/.test(value);
 dir = changeDir[RegExp.$1][dir];
 switch(dir){
  case N: loc[1] += parseInt(RegExp.$2); break;
  case E: loc[0] += parseInt(RegExp.$2); break;
  case S: loc[1] -= parseInt(RegExp.$2); break;
  case W: loc[0] -= parseInt(RegExp.$2); break;
 }
});

console.log(loc, Math.abs(loc[0]) + Math.abs(loc[1]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var dir = N;
var loc = [0, 0];
var map = ['0,0'];
var done = false;

data.forEach(function(value){
 if(done == true) return;
 /(.)(.+)/.test(value);
 dir = changeDir[RegExp.$1][dir];
 move(dir, RegExp.$2);
});

function move(dir, steps){
 for(var i=0; i<steps; i++){
  switch(dir){
   case N: loc[1] += 1; break;
   case E: loc[0] += 1; break;
   case S: loc[1] -= 1; break;
   case W: loc[0] -= 1; break;
  }
  if(!~map.indexOf(loc.join(','))){
   map.push(loc.join(','));
  } else {
   console.log(loc, Math.abs(loc[0]) + Math.abs(loc[1]));
   done = true;
   return;
  }
 }
};
