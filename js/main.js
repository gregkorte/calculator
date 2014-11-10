$(function() {
	var $numButton = $("input.number");
	var $opButton = $("input.operator");
	var inputOp = $opButton.val();
	var $rightBut = $("input.rightbut");
	var inputRight = $rightBut.val();
	var $display = $("input.displayoutput");
	$numButton.on('click', function() {
		press($(this).val());
	});
	$rightBut.on('click', function() {
		press($(this).val());
	});
	$opButton.on('click', function() {
		press($(this).val());
	});
});

function displayOutput() {
	return $('#displayoutput').val();
}

var stickyNumber = $('#displayoutput').val();
var previousResult;
var nextOperation;

function add(a, b) {
	if (!a) {
		a = 1;
	}
	return ((a * 100000000000000) + (b * 100000000000000)) / 100000000000000;
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

	case 'clear':
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
		// previousResult += +$('#displayoutput').val();
		// $('#displayoutput').val('');
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

// function hide(element) {
// if (element.classList)
// element.classList.add('hidden');
// else
// element.className += '' + 'hidden';
// }
//
// function show(element) {
// if (element.classList)
// element.classList.remove('hidden');
// else
// element.className = element.hidden
// .replace(new RegExp('(^|\\b)' + 'hidden'.split('')
// .join('|') + '(\\b|$)', 'gi'), '');
// }
//
// function toggle(element) {
// if (element.classList)
// element.classList.toggle('hidden');
// }
//
// hide(document.querySelector('.divide0'));