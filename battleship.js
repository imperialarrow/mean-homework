var ask = require('readline-sync');

//create battlefield
var grid = [];
var rows = 10;
var columns = 10;

for(var i = 0; i < rows; i++){
	grid.push([]);
	  for(var j = 0; j < columns; j++){
	  grid[i].push(i + "," + j);
	  }
}
//Get user coordinates
console.log(grid);
var userChoice1 = ask.question('Pick a number from 0 through 9.\n')
var userChoice2 = ask.question('Okay, now pick another number (0-9).\n')
var userChoice = paresint(userChoice1) + "," + parseint(userChoice2)

var location = {
  ship:function(){
  	if((math.floor(math.random() * 5)) === 3){
  		this.ship = true;
  	}else{
  		this.ship = false;
  		}	
  	}
  }
