
const txt = ['an artist','basically the candidate you want to hire!'];
var speed = 50;

var tt = document.getElementsByClassName("element");
var crsor = document.getElementsByClassName("typed-cursor");

// function typeing(){
// 	for (var i=0; i<txt.length; i++){
// 		var iv = 0;
// 		tmp_txt=txt[i];
		
// 		function typ(){
// 				if (iv < tmp_txt.length) {
// 				tt[0].textContent += tmp_txt.charAt(iv);
// 				iv++;
// 				setTimeout(typ, speed);
// 			}

// 		}
// 		var k=0;
// 		function detyp(){
// 				if (k<iv) {
// 				tt[0].textContent += '\b';
// 				k++;
// 				setTimeout(detyp, speed*2);
// 			}
// 		}
		
// 		if(i==txt.length-1){
// 			typ();
// 			crsor[0].setAttribute("style", "display : none;");		
// 		}
// 		else{
// 			typ();
// 			detyp();
// 		}
// 		// typ();
// 		// else
// 	}

// };

let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			tt[0].innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, speed);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			tt[0].innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, speed*2);
	};
	loopDeleting();
};

typingEffect();