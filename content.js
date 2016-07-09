$(document).ready(function () {
	sterff();
	setInterval("sterff();", 100);
});

function sterff(){
	
	$(".gig-comment-body").text(function(i, oldText) {
		return herpderp(oldText);
	});

	$(".gig-comments-comment-body").text(function(i, oldText) {
		return herpderp(oldText);
	});
}

function herpderp (oldText) {

	var pattern = /\b[a-zA-Z]+\b/g
	
	if (oldText.indexOf('herpderp') < 0){
	
		var matches = oldText.match(pattern);

		var result = "Herp ";
		
		for (var i = 0; i < matches.length; i++) {
			result += GetWord() + " ";
		}

		result += "derp.";

		return result;
	}
}

function GetWord(){

	var result;

	var rand = Math.floor((Math.random() * 20));
				
	if (rand <= 3) {
		result = 'herpderp';
	}
	else if (rand > 3 && rand <= 7) {
		result = 'herp';
	}
	else if (rand > 7 && rand <= 11) {
		result = 'derp';
	}
	else if (rand == 12) {
		result = 'derp,';
	}
	else if (rand == 13) {
		result = 'herp,';
	}
	else if (rand == 14) {
		result = 'herpderp,';
	}
	else if (rand == 15) {
		result = 'herpderp';
	}
	else if (rand == 16) {
		result = 'herp - derp';
	}
	else if (rand == 17) {
		result = 'derp. Herpderp';
	}
	else if (rand == 18) {
		result = 'herp. Derp';
	}
	else if (rand == 19) {
		result = 'herpderp. Herp';
	}

	return result;
}