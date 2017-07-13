'use strict'

/*function FizzBuzzWhizz(a, b, c) {
  let array = [];
  let output;
  for (var i = 0; i<100; i++) {
    array.push(i);
  }
  output = array.join(' ');
  return output;
}*/

function mapNumberToWords(num) {
  let fizz = 3;
  let buzz = 5;
  let whizz = 7;
  let word;
  if (num % fizz == 0) {
    word = 'fizz';
  } else if (num % buzz == 0) {
     word = 'buzz';
  } else if (num % whizz == 0) {
    word = 'whizz';
  } else {
    word = num.toString();
  }
  return word;
}

function mapNumberToWord_two(num) {
  let word;
  let fizzbuzz = 15;
  let fizzwhizz = 21;
  let buzzwhizz = 70;
  if(num%fizzbuzz == 0) {
    word = 'fizzbuzz';
  } else if (num%fizzwhizz == 0) {
    word = 'fizzwhizz';
  } else if (num%buzzwhizz == 0) {
    word = 'buzzwhizz';
  }
  return word;
}

function judgeThree(num) {
  let array = [];
  let word;
  let str = num.toString();
  array = str.split('');
  for (var i = 0; i<array.length; i++) {
    if(array[i] == '3') {
      return true;
    }  
  }
  return false;
}

function mapNumberToWord_three() {
 return 'fizz';
}

function getResult(num) {
  debugger;
  if(num%15==0 || num%70==0 || num%21==0) {
    return mapNumberToWord_two(num);
  } else if (judgeThree(num)){
    return mapNumberToWord_three();
  } else if (num%3==0 || num%5==0 || num%7==0) {
    return mapNumberToWords(num);
  } else {
    return num;
  }
}

//console.log(getResult(3));