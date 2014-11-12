;(function(){
	'use strict';
	
	describe('String representation on Decimal', function(){
		describe('3', function(){
			it('should be 3', function(){
				var num = new Decimal("3");
				assert.equal(num.toString(), "3");
			});
		});
		describe('4.05', function(){
			it('should be 4.05', function(){
				var num = new Decimal("4.05");
				assert.equal(num.toString(), "4.05");
			});
		});
	});
	describe('multiplying decimals', function(){
		
	});
	describe('adding decimals', function(){
		
	});
	describe('subtracting decimals', function(){
		
	});
	describe('dividing decimals', function(){
		
	});
	describe('creating a decimal from a float', function(){
		
	});
	describe('signed decimals', function(){
		
	});
})();
