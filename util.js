const getters = require('./getters');

function toString(){
    var colorCombination = {};
    var colorsManual = "Color Combinations manual: \n\nnumber: Major Color, Minor Color\n";
    const colorsLength = 26;
    for(let num = 1; num < colorsLength; num++)
    {
      colorCombination = getters.GetColorFromPairNumber(num);
      colorsManual += num +":        "+ colorCombination.major +",       "+ colorCombination.minor+"\n";
    }
    return colorsManual;
  }
  
module.exports = { toString };
  
