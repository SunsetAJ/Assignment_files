//Hovers Script

var possible_effects = ["color", "opacity", "background-color"];
var new_effect;
var object_transition = ""; 

function Hover_active(id, effect, value){
	var object = document.getElementById(id);
	for (i = 0; i <= possible_effects.length; i++){
		if (effect == possible_effects[i]){
			new_effect = possible_effects[i];
		}
	}
	console.log(new_effect);
	object.style.transition = new_effect + " 0.75s ease-in-out";
	object.style[new_effect] = value;
	object.style.cursor = "pointer";
}

function No_hover(id, effect, value){
	var object = document.getElementById(id);
	for (i = 0; i < possible_effects.length; i++){
		if (effect == possible_effects[i]){
			new_effect = possible_effects[i];
		}
	}
	console.log(new_effect);
	object.style.transition = new_effect + " 0.75s ease-in-out";
	object.style[new_effect] = value;
	object.style.cursor = "pointer";
}
