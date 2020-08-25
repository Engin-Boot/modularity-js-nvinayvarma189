const test = require('./tests');
const utils = require('./util');

const manual = utils.toString();
console.log(manual);

test.runTests();
