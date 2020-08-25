const expect = require('chai').expect;
const getters = require('./getters');

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = getters.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = getters.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

function runTests(){
    console.log("color coder");
    testNumberToPair(4, "white", "brown");
    testNumberToPair(25, "violet", "slate");
    testColorToNumber("black", "brown", 14);
    testColorToNumber("yellow", "green", 18);
}

module.exports = { runTests }