var data = String.raw`/* input removed */`;

function parse(line) {
 var bot = /bot (\d+)/.exec(line)[1];
 lowToBot = /low to bot (\d+)/.test(line) && RegExp.$1;
 highToBot = /high to bot (\d+)/.test(line) && RegExp.$1;
 lowToOut = /low to output (\d+)/.test(line) && RegExp.$1;
 highToOut = /high to output (\d+)/.test(line) && RegExp.$1;
 value = /value (\d+)/.test(line) && RegExp.$1;

 if(bots[bot] == null){
  bots[bot] = new Bot(bot);
 }
 if(lowToOut && outputs[lowToOut] == null){
  outputs[lowToOut] = new Output;
 }
 if(highToOut && outputs[highToOut] == null){
  outputs[highToOut] = new Output;
 }

 if(value){
  bots[bot].addChip(value, bot);
 }
 if(lowToOut){
  bots[bot].receiverLow = ['out', lowToOut];
 }
 if(highToOut){
  bots[bot].receiverHigh = ['out', highToOut];
 }
 if(lowToBot){
  bots[bot].receiverLow = ['bot', lowToBot];
 }
 if(highToBot){
  bots[bot].receiverHigh = ['bot', highToBot];
 }
};

function Output(){
 this.chips = [];
}
Output.prototype.addChip = function(value){
 this.chips.push(value);
};

function Bot(id){
 this.id = id
 this.chips = [];
 this.receiverLow = null;
 this.receiverHigh = null;
};

Bot.prototype.addChip = function(value){
 this.chips.push(value)
 if(this.chips.length == 2){
//  console.log(this.id, this.chips, this.receiverLow, this.receiverHigh)
  if(~this.chips.indexOf(17) && ~this.chips.indexOf(61))
   console.log(this.id, this.chips)

  if(this.receiverLow[0] == 'bot'){
   bots[this.receiverLow[1]].addChip(Math.min.apply(Math, this.chips));
  } else {
   outputs[this.receiverLow[1]].addChip(Math.min.apply(Math, this.chips));
  }
  if(this.receiverHigh[0] == 'bot'){
   bots[this.receiverHigh[1]].addChip(Math.max.apply(Math, this.chips));
  } else {
   outputs[this.receiverHigh[1]].addChip(Math.max.apply(Math, this.chips));
  }
 }
};

var bots = [];
var outputs = [];
data.split('\n').forEach(parse);

console.log(outputs[0].chips[0] * outputs[1].chips[0] * outputs[2].chips[0]);