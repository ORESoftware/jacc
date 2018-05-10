const util = require('util');

const to = setTimeout(function () {

}, 2);

console.log(util.inspect(to));

setTimeout(function () {
  console.log();
  console.log(util.inspect(to));
  
}, 30);
