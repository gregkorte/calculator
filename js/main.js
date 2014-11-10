$(function(){
	var $numButton = $("input.number");
	var $opButton = $("input.operator");
	var inputOp = $opButton.val();
	var $rightBut = $("input.rightbut");
	var inputRight = $rightBut.val();
	var $display = $("input.displayoutput");
	var prior = 0;
	$numButton.on('click', function(){
		$('#displayoutput').val($(this).val()).after(prior);
		//append the numbers
	});
	$rightBut.on('click', function(){
		if($(this).val() === 'clear'){
			//clear the display bar
		} else {
			prior += +$('#displayoutput').val();
		  $('#displayoutput').val(prior);
			//run the equals operator
		}
	});
	$opButton.on('click', function(){
		$('#displayoutput').val($(this).val());
		//run the function 'press'
		
	
});
function displayOutput(){
	return $('#displayoutput').val();
}

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
	});

