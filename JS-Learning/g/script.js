/*
let date = new Date();
alert(date); //Tue Mar 05 2024 03:02:20 GMT+0300 (GMT+03:00)

let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

alert(new Date(2011,12,1));
*/

let start = Date.now(); // start measuring time
let doSomething=0;
// do the job
for (let i = 0; i < 100000000; i++) {
    doSomething+=i;
}

let end = Date.now(); // end measuring time

alert( `The loop took ${end - start} ms\nThe result is = ${doSomething}` );

function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );