function Decimal(initialValue) {
	this.value = initialValue * 1;
	this.mantissa = initialValue.toString().match(/[^.]*\.?(\d*)/)[1].length;
	//this.mantissa = initialValue.toString().split('.')[1].length;
	this.plus = function(addend){
		var sum = this.value + addend.value;
		//a is mantissa of this
		//b is mantissa of addend
		//c is max of a and b
		//sum.toFixed so that we only have c numbers after the point
		var digits = Math.max(this.mantissa, addend.mantissa);
		return new Decimal(sum.toFixed(digits));
	};
	this.times = function(multiplicand){
		var product = this.value * multiplicand.value;
		return new Decimal(product);
		
	};
	this.toString = function() {
		return this.value.toString();
	};
}
