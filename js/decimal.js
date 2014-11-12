function Decimal(initialValue) {
	this.value = initialValue;
	this.times = function(multiplicand){
		var product = (this.value * 1) * (multiplicand.value * 1);
		return new Decimal(product);
		
	};
	this.toString = function() {
		return this.value;
	};
}
