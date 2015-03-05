describe('Testing FilterDemo', function(){
	'use strict';

	beforeEach(module('myapp'));

	var $filter;

	beforeEach(inject(function(_$filter_){
		$filter= _$filter_;
	}));

	it('testing 1', function(){
		expect($filter('aFilter')).not.toBe(null);
	});
})