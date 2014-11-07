function displayOutput(){
	return $('#displayOutput').val();
}

function press(buttonValue){
	var current = $('#displaoyoutput').val();
	$('#displayoutput').val(current += buttonValue);
}
