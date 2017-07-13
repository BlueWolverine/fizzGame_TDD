'use strict';

describe('pos', () => {

  xit('when there is no rule, should print 1..100 ', () => {
    
    let result = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100';

    expect(FizzBuzzWhizz(a, b, c)).toEqual(result);
  });

  it('when there is the first rule, should print fizz if num is', () => {
    let num = 3; 
    let result = 'fizz';
    expect(mapNumberToWords(num)).toEqual(result);
  });

  it('when there is the first rule, should print buzz if num is', () => {
    let num = 5; 
    let result = 'buzz';
    expect(mapNumberToWords(num)).toEqual(result);
  });

  it('when there is the first rule, shoule print whizz if num is', () => {
    let num = 7;
    let result = 'whizz';
    expect(mapNumberToWords(num)).toEqual(result);

  });

  it('when there is the second rule, should print fizzbuzz if num is', () => {
    let num = 15;
    let result = 'fizzbuzz';
    expect(mapNumberToWord_two(num)).toEqual(result);
  });

  it('when there is the second rule, shoule print fizzwhizz if num is', () => {
    let num = 21;
    let result = 'fizzwhizz';
    expect(mapNumberToWord_two(num)).toEqual(result);
  });

  it('when there is the second rule, should print buzzwhizz if num is', () => {
    let num = 70;
    let result = 'buzzwhizz';
    expect(mapNumberToWord_two(num)).toEqual(result);
  });

  it('when there is the three rule, should print fizz if num is', () => {
    let num = 24;
    let result = false;
    expect(judgeThree(num)).toEqual(result);
  });

  it('get the final result', () => {
     let num = 32;
     let result = 'fizz';
     expect(getResult(num)).toEqual(result);
  });

});
