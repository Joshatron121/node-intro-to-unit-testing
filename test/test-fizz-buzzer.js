const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should return expected outputs', function(){
		const expectedInputs = [
			[ 3,	'fizz' ],
			[ 5,	'buzz' ],
			[ 15, 'fizz-buzz' ]
		]
		expectedInputs.forEach(function(input) {
			const answer = fizzBuzzer(input[0])
			answer.should.equal(input[1])
		})
	})
	it('should throw an error if not a number', function(){
		const unexpectedInputs = [ 'no', false, undefined, null ]

		unexpectedInputs.forEach(function(input) {
			(function(){
				fizzBuzzer(input)
			}).should.throw(Error)
		})
	})
})