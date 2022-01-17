function ChangeColor(){
	idrules = document.getElementById("rules")
	idrules.style.color = "darkgrey";
	alert("quiz, press enter, or close to begin the quiz:")
	// quiz()

function quiz(){
	var points = 0
	console.log("quiz started")
	q1 = prompt("Are you allowed to play fortnite? yes|no")
	if (q1 == "no" || q1 == "No"){
		alert("correct +1 point")
		points += 1
	}
	else{
		alert("you have disapointed the rohan god you get no poits take the L")
	}
	q2 = prompt("how many gods are there 1|2|3|4")
	if (q2 == "2"){
		alert("correct +1 point")
		points += 1
	}
	else{
		alert("you have disapointed the rohan god you get no points take the L")
	}
	q3 = prompt("who is the best? rohan|me|you")
	if (q3 == "rohan"|| q3 == "Rohan");{
		alert("correct +1 point")
		points += 1
	}


	q4 = prompt("can you sue people? yes|no")
	if (q4 == "no"||q4 == "No"){
		alert("correct +1 point")
		points += 1
	}
	else{
		alert("you have disapointed the rohan god you get no points take the L")
	}
	q5 = prompt("what game is boss? drift boss|hello kity")
	if (q5 == "drift boss"||q5 == "Drift boss"){
		alert("correct +1 point")
		points += 1
	}
	else{
		alert("you have disapointed the rohan god you get no points take the L")
	}
	var percent = points*20
		alert('you scored a  ' + percent + ' percent');
	if (percent > 69){
		alert("you are now a rohanist study the TOS and PRAY RoHaN or you will be hardware bannned and IP baned from this religeon if you want you can also join the cult")
	}
	else {
		alert("you failed, you need atleast a 70 percent to pass")}
}
}	