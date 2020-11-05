function showPassword() {
	var showPassCheckbox = document.getElementById("show_pass");
	var passInput = document.getElementById("passInput");
	
	if (showPassCheckbox.checked) {
		passInput.setAttribute("type", "text");
	} else {
		passInput.setAttribute("type", "password");
	}
}

function promptSignIn() {
	var answer = prompt("Please write your name");
	if (answer == "Johy Davis") {
		alert("Cocksucker!");
	} else {
		var b = confirm("Are you really not gay?");
	
	}
}

function calculateBP() {
	const initialProfitInput = document.getElementById("initialProfitInput");
	const initialProfit = document.getElementById("initialProfitInput").value;
	if (initialProfit && /^\d+$/.test(initialProfit)) {
		const tBody = calculateBPlan(parseInt(initialProfit));
		var temp = document.createElement('div');
		temp.innerHTML = '<table class="table"><thead><tr><th>Lot</th><th>Transactions Count</th><th>Points</th></tr></thead>' 
			+ tBody + '</table>';

		document.body.appendChild(temp);
	} else {
		initialProfitInput.value = "";
		alert("Please insert a number!");
	}
}

function calculateBPlan(initialProfit) {
	let tBody = "";
	console.log("in fun");
	const UPPER_BOUND = 50;
	const LOWER_BOUND = 30;
	for(lot = 10; lot > 0; lot--) {
		let points = initialProfit / lot;
		for (j = 1; j > 0; j++) {
			let p = points / j;
			if (p > UPPER_BOUND)
				continue;
			if (p < LOWER_BOUND) {
				console.log("--------");
				break;
			}
			tBody += "<tr><td>" + lot / 10 + "</td><td>" + j + "</td><td>" + parseInt(p, 10) + "</td></tr>";
			console.log("Lot: " + lot / 10 + ", Transactions: " + j + ", Points: " + parseInt(p, 10));
		}
	}
	return prepareTBody(tBody);
}

function prepareTBody(tbody) {
	return "<tbody>" + tbody + "</tbody>";
}