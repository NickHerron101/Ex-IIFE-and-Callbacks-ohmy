function showCarnivores (taco) {
	console.log("carnivores", taco);

var carney = document.getElementById("carnivores");
var outPutString = "";
for(var i = 0; i < taco.carnivores.length; i++) {
	var currentCarney = taco.carnivores[i];
	outPutString += "<p>" + currentCarney.name + "</p>";
}
	carney.innerHTML += outPutString;
}

function showHerbivores (herb) {
	console.log("herbivores",herb);
	var herby = document.getElementById("herbivores");
	var outPutString = "";
		for (var i = 0; i < herb.herbivores.length; i++) {
			console.log(herb.herbivores[i]);
			var currentHerby = herb.herbivores[i];
			outPutString += `<article class="weird"><p>${currentHerby.name}</p><p>${currentHerby.weight}</p><p>${currentHerby.food}</p></article>`
		}
		herby.innerHTML += outPutString;
	}




Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);