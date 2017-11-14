'use strict';

let previousResult;
let nextOperation;
let current = $('#displayoutput').val();

$(function() {
	let $keyPad = $('input[type=button]');

	$keyPad.on('click', function() {
		press($(this).val());
	});
});

let displayOutput() {
	return $('#displayoutput').val();
}

let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => = a * b;

let divide = (a, b) => {
	if (b === 0) {
		return "ERROR";
	} else {
		return a / b;
	}
}

let currentValue(string) {
	return $('#displayoutput').val() * 1;
}

let calculate() {
	if (!!nextOperation) {
		previousResult = nextOperation(previousResult, currentValue());
	} else {
		previousResult = currentValue();
	}
}

let press(buttonValue) {
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
			let current = $('#displayoutput').val();
			return $('#displayoutput').val(current * -1);
			break;

		case 'on/off':
			$('#displayoutput').toggleClass('on');
			nextOperation = undefined;
			previousResult = undefined;
			return $('#displayoutput').val('');
			break;

		default:
			let current = $('#displayoutput').val();
			$('#displayoutput').val(current + buttonValue);
	}
}
