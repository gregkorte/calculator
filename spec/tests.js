/* global describe, it */
;(function(){
'use strict';

beforeEach(function(){
	previousResult = undefined;
	nextOperation = undefined;
	$('#displayoutput').val('');
});

function type(){
	var args = Array.prototype.slice.call(arguments);
	args.forEach(function(arg){
		press(arg);
	});
}

	describe('Entering numbers', function(){
		describe('displayoutput', function(){
			it('should return the value of the display', function(){
				$('#displayoutput').val(1.23);
				assert.equal(displayOutput(), 1.23);
				$('#displayoutput').val(2.34);
				assert.equal(displayOutput(), 2.34);
			});
		});

		describe('type', function(){
			it('should display the number typeed', function(){
				assert.equal(displayOutput(), '');
				type(1);
				assert.equal(displayOutput(), 1);
			});
		});

		describe('Entering the decimal number 7 . 8 9', function(){
			it('should display 7.89', function(){
				type(7, '.', 8, 9);
				assert.equal(displayOutput(), 7.89);
			});
		});
	});

	describe('Dividing', function(){
		describe('4 / 2 =', function(){
			it('should be 2', function(){
				type(4, '/', 2, '=');
				assert.equal(displayOutput(), '2');
			});
		});

		describe('1 / . 2 =', function(){
			it('should be 5', function(){
				type(1, '/', '.', 2, '=');
				assert.equal(displayOutput(), '5');
			});
		});

		describe('. 1 2 5 / . 5 =', function(){
			it('should be .25', function(){
				type('.', 1, 2, 5, '/', '.', 5, '=');
				assert.equal(displayOutput(), '0.25');
			});
		});

		describe('0 / 3 =', function(){
			it('should be 0', function(){
				type(0, '/', 3, '=');
				assert.equal(displayOutput(), '0');
			});
		});

		describe('3 . 1 4 / 0 =', function(){
			it('should be ERROR', function(){
				type(3, '.', 1, 4, '/', 0, '=');
				assert.equal(displayOutput(), 'ERROR');
			});
		});

		describe('12 / 2 /  2 =', function(){
			it('should be 3', function(){
				type(1, 2, '/', 2, '/', 2, '=');
				assert.equal(displayOutput(), '3');
			});
		});

		describe('3 * 4 / 2 =', function(){
			it('should be 6', function(){
				type(3, '*', 4, '/', 2, '=');
				assert.equal(displayOutput(), '6');
			});
		});
	});

	describe('Adding', function () {
		describe('7 . 8 9 + 1 + 2 =', function(){
			it('should be 10.89', function () {
				type(7, '.', 8, 9, '+', 1, '+', 2, '=');
				assert.equal(displayOutput(), '10.89');
			});
		});

		describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
			it('should be 10.89', function () {
				type(7, '.', 8, 9, '+', 1, '.', 0, 0, '+', 2, '=');
				assert.equal(displayOutput(), '10.89');
			});
		});

		describe('1 + 1 =', function(){
			it('should be 2', function () {
				type(1, '+', 1, '=');
				assert.equal(displayOutput(), '2');
			});
		});

		describe('. 1 + . 2 =', function(){
			it('should be 0.3', function () {
				type('.', 1, '+', '.', 2, '=');
				assert.equal(displayOutput(), '0.3');
			});
		});

		describe('. 1 1 1 1 1 1 1 1 + . 2 2 2 2 2 2 2 2 =', function(){
			it('should be 0.3', function () {
				type('.', 1, 1, 1, 1, 1, 1, 1, 1, '+', '.', 2, 2, 2, 2, 2, 2, 2, 2, '=');
				assert.equal(displayOutput(), '0.33333333');
			});
		});
	});

	describe('Subtracting', function () {
		describe('7 . 8 9 - 1 - 2 =', function(){
			it('should be 4.89', function () {
				type(7, '.', 8, 9, '-', 1, '-', 2, '=');
				assert.equal(displayOutput(), '4.89');
			});
		});

		describe('7 . 8 9 - 1 . 0 0 - 2 =', function(){
			it('should be 4.89', function () {
				type(7, '.', 8, 9, '-', 1, '.', 0, 0, '-', 2, '=');
				assert.equal(displayOutput(), '4.89');
			});
		});

		describe('1 - 1 =', function(){
			it('should be 0', function () {
				type(1, '-', 1, '=');
				assert.equal(displayOutput(), '0');
			});
		});

		describe('. 5 - . 2 =', function(){
			it('should be 0.3', function () {
				type('.', 5, '-', '.', 2, '=');
				assert.equal(displayOutput(), '0.3');
			});
		});

		describe('. 5 5 5 5 5 5 5 5 + . 2 2 2 2 2 2 2 2 =', function(){
			it('should be 0.3', function () {
				type('.', 5, 5, 5, 5, 5, 5, 5, 5, '-', '.', 2, 2, 2, 2, 2, 2, 2, 2, '=');
				assert.equal(displayOutput(), '0.33333333');
			});
		});
	});

	describe('Multiplying', function(){
		describe('2 * 3 =', function(){
			it('should be 6', function(){
				type(2, '*', 3, '=');
				assert.equal(displayOutput(), '6');
			});
		});

		describe('1 * . 2 = .2', function(){
			it('should be .2', function(){
				type(1, '*', '.', 2, '=');
				assert.equal(displayOutput(), '0.2');
			});
		});

		describe('. 1 2 5 * . 5 =', function(){
			it('should be .0625', function(){
				type('.', 1, 2, 5, '*', '.', 5, '=');
				assert.equal(displayOutput(), '0.0625');
			});
		});

		describe('0 * 3 =', function(){
			it('should be .0', function(){
				type(0, '*', 3, '=');
				assert.equal(displayOutput(), '0');
			});
		});

		describe('3 . 1 4 * 0 =', function(){
			it('should be .0', function(){
				type(3, '.', 1, 4, '*', 0, '=');
				assert.equal(displayOutput(), '0');
			});
		});

		describe('3 . 1 4 * . 0 =', function(){
			it('should be 0', function(){
				type(3, '.', 1, 4, '*', '.', 0, '=');
				assert.equal(displayOutput(), '0');
			});
		});

		describe('3 * 4 * 2 =', function(){
			it('should be 24', function(){
				type(3, '*', 4, '*', 2, '=');
				assert.equal(displayOutput(), '24');
			});
		});

		describe('3 * 4 + 2 =', function(){
			it('should be 14', function(){
				type(3, '*', 4, '+', 2, '=');
				assert.equal(displayOutput(), '14');
			});
		});

		describe('3 * 0 * 2 =', function(){
			it('should be 0', function(){
				type(3, '*', 0, '*', 2, '=');
				assert.equal(displayOutput(), '0');
			});
		});
	});

	describe('Clear', function(){
		describe('C =', function(){
			it('should be empty string', function(){
				type(3, '*', 2, '=', 'C');
				assert.equal(displayOutput(), '');
			});
		});
	});
})();