$(function(){
	var poke = randImg();
	$('#user-guess').click(makeGuess);
	start();
});

function start(poke){
	var counter = 10;
	makeGray();
	makeHidden();
	consultArray();
}




var poke_array = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'butterfree', 'pidgey', 'rattata', 'arbok', 'sandslash', 'nidorino', 'vulpix', 'ninetales', 'jigglypuff', 'golbat', 'oddish', 'diglett', 'persian', 'growlithe', 'poliwag'];

var timer = setInterval(countDown, 1000);

function consultArray(){
	var fullPath = $("#pokemon").attr('src');
	var str_index = fullPath.search();
	var index = fullPath.replace(/\D/g, '');
	var poke_name = poke_array[index];
	

	}

function makeGuess(){
	//alert('it works!');
	var guess = $('#pokeguess').val();
	if (poke_name === guess.toLowerCase()){
		alert('correct')
	} else {

	}

	poke = randImg();
}

function makeHidden(){
	$('.tepig').hide();
}

function makeGray(){
	$('.pokeball').attr('src', 'assets/img/pokeball-grey.png');
}

var Pokemon = function (name){
	this.name = name;
	this.path = 'assets/img/' + (poke_array.indexOf(name) + 1) + '.png';
}

function randImg(){
	var randomName = poke_array[Math.floor(Math.random() * poke_array.length)];
	var newPokemon = new Pokemon(randomName);
	$('#pokemon').attr('src', newPokemon.path);
	return newPokemon;
}

var countDown = function(){
	counter--;
	$('#timer').html(counter);
	if($('#timer') =0){
		clearInterval(timer);
	}
}