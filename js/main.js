$(function() {
	var $keyPad = $('input[type=button]');

	$keyPad.on('click', function() {
		press($(this).val());
	});
});

function displayOutput() {
	return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		return hideShow();
	} else {
		return a / b;
	}
}

function currentValue(string) {
	return $('#displayoutput').val() * 1;
}

function calculate() {
	if (!!nextOperation) {
		previousResult = nextOperation(previousResult, currentValue());
	} else {
		previousResult = currentValue();
	}
}

function press(buttonValue) {
	switch (buttonValue) {

		case '+':
			calculate();
			nextOperation = add;
			$('#displayoutput').val('');
			break;

		case '-':
			calculate();
			nextOperation = subtract;
			$('#displayoutput').val('');
			break;

		case '*':
			calculate();
			nextOperation = multiply;
			$('#displayoutput').val('');
			break;

		case '/':
			calculate();
			nextOperation = divide;
			$('#displayoutput').val('');
			break;

		case 'C':
			nextOperation = undefined;
			previousResult = undefined;
			return $('#displayoutput').val('');
			break;

		case '=':
			calculate();
			$('#displayoutput').val(previousResult);
			previousResult = 0;
			break;

		case '+/-':
			var current = $('#displayoutput').val();
			return $('#displayoutput').val(current * -1);
			break;

		case 'on/off':
			$('#displayoutput').toggleClass('on');
			nextOperation = undefined;
			previousResult = undefined;
			return $('#displayoutput').val('');
			break;

		default:
			var current = $('#displayoutput').val();
			$('#displayoutput').val(current + buttonValue);
	}
}

function hideShow() {
	$("div").addClass(".divide0 hidden");
	$("div").removeClass(".divide0 hidden");
}