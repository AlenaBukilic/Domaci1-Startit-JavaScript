	var makazeDugme = document.getElementById("makazeDugme");
	var papirDugme = document.getElementById("papirDugme");
	var kamenDugme = document.getElementById("kamenDugme");

	var userChoice;

	makazeDugme.onclick = function() {
		userChoice = "makaze";
		document.getElementById("tvoj").classList.add("fa-hand-scissors-o");
		document.getElementById("tvoj").classList.remove("fa-hand-paper-o");
		document.getElementById("tvoj").classList.remove("fa-hand-rock-o");
	}

	papirDugme.onclick = function() {
		userChoice = "papir";
		document.getElementById("tvoj").classList.add("fa-hand-paper-o");
		document.getElementById("tvoj").classList.remove("fa-hand-scissors-o");
		document.getElementById("tvoj").classList.remove("fa-hand-rock-o");
	}

	kamenDugme.onclick = function() {
		userChoice = "kamen";
		document.getElementById("tvoj").classList.add("fa-hand-rock-o");
		document.getElementById("tvoj").classList.remove("fa-hand-scissors-o");
		document.getElementById("tvoj").classList.remove("fa-hand-paper-o");
	}

	var computerChoice = Math.random();

	function choiceComp() {

	if (computerChoice < 0.34) {
		computerChoice = "makaze";
		document.getElementById("njegov").classList.add("fa-hand-scissors-o");
		document.getElementById("njegov").classList.remove("fa-hand-paper-o");
		document.getElementById("njegov").classList.remove("fa-hand-rock-o");

	}
	else if (computerChoice < 0.67) {
		computerChoice = "papir";
		document.getElementById("njegov").classList.add("fa-hand-paper-o");
		document.getElementById("njegov").classList.remove("fa-hand-scissors-o");
		document.getElementById("njegov").classList.remove("fa-hand-rock-o");

	}

	else {
		computerChoice = "kamen";
		document.getElementById("njegov").classList.add("fa-hand-rock-o");
		document.getElementById("njegov").classList.remove("fa-hand-scissors-o");
		document.getElementById("njegov").classList.remove("fa-hand-paper-o");
	}
	
}
	

	function compare() {
		if (userChoice == computerChoice){
			 document.getElementById("rez").innerHTML = "Nereseno!";
		}
		else if (userChoice == "makaze" && computerChoice == "papir" || userChoice == "papir" && computerChoice == "kamen" || userChoice == "kamen" && computerChoice == "makaze")  {
			 document.getElementById("rez").innerHTML = "Tvoja pobeda!";
		}
		else {
			 document.getElementById("rez").innerHTML = "Izgubio si!";
		}
	}