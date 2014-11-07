$(function(){
	var $numButton = $("input.number");
	var $opButton = $("operator");
	var inputOp = $opButton.val();
	var $rightBut = $("input.rightbut");
	var inputRight = $rightBut.val();
	var $display = $("displaybar");
	$numButton.on('click', function(){
		$('#displayoutput').val($(this).val());
		//append the numbers
	});
	$rightBut.on('click', function(){
		if($(this).val() === 'clear'){
			//clear the display bar
		} else {
			//run the equals operator
		}
	});
	
});
function displayOutput(){
	return $('#displayoutput').val();
}

var prior = 0;

function press(buttonValue){
	switch (buttonValue){
		case "+":
		  prior += +$('#displayoutput').val();
		  $('#displayoutput').val('');
		  //handle +
		  break;
		case "-":
		//handle -
		break;
		case "*":
		//handle *
		break;
		case "/":
		//handle /
		break;
		case "=":
		  prior += +$('#displayoutput').val();
		  $('#displayoutput').val(prior);
		  prior = 0;
		//handle =
		break;
		case "C":
		//handle C
		break;
		case "+/-":
		//handle +/-
		break;
	
	default:
	//handle numbers
	current = $('#displayoutput').val();
	$('#displayoutput').val(current += buttonValue);
	}
};
