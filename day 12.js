var data = String.raw`cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 16 c
cpy 17 d
inc a
dec d
jnz d -2
dec c
jnz c -5`;

data = data.split('\n');

var reg = {a:0, b:0, c:1, d:0};
process(0);
console.log(reg.a);

function process(pos){
 function cpy(a, b){
  reg[b] = isNaN(a) ? reg[a] : parseInt(a);
 };
 function inc(a){
  ++reg[a];
 };
 function dec(a){
  --reg[a];
 };
 function jnz(a, b){
  if(1*(isNaN(a) ? reg[a] : a))
   pos += 1*(isNaN(b) ? reg[b] : b) - 1;
 };

 var instructions = {cpy: cpy, inc: inc, dec: dec, jnz: jnz};
 var line;

 do{
  line = data[pos].split(' ');
  instructions[line[0]](line[1], line[2]);
 } while(++pos < data.length)
};