const expect = require('chai').expect;
const { PrimitiveLiteral } = require('../lib/primitiveLiteral');
const { Expressions } = require('../lib/expressions'); 
const cases = require('./function-test-cases');

describe('Function tests from json', () => {
  cases.forEach(function(item, index, array) {
    const title = '#' + index + ' should parse ' + item['-Name'] + ': ' + item.Input;
    let resultName = "result";
    if (item.result === undefined) {
        resultName = "result_error";
        item['-FailAt'] = item['-FailAt'] || 0;
    }
    if (item[resultName] !== undefined) {
      it(title, () => {
        let source = new Uint8Array(new Buffer(item.Input));
        if (item[resultName].next === undefined) item[resultName].next = item.Input.length;
        if (item[resultName].raw === undefined) item[resultName].raw = item.Input;

        let functionName = getFunctionName(item["-Rule"] || 'primitiveLiteral');
        
        // Try PrimitiveLiteral first, then Expressions
        let functionToCall = (PrimitiveLiteral[functionName] || PrimitiveLiteral.primitiveLiteral)(source, 0);

        if(!functionToCall){
          try
          {
           functionToCall = Expressions[functionName](source, 0);
          }
          catch{}
        }

        if (item['-FailAt'] !== undefined) {
          expect(functionToCall).to.be.undefined;
          return;
        }
        // Exclude metadata from comparison
        const { metadata, ...literalWithoutMetadata } = functionToCall || {};
        expect(literalWithoutMetadata).to.deep.equal(item[resultName]);
      });
    }
  });
});

function getFunctionName(itemRule) {
  switch (itemRule) {
    case 'string':
      return 'stringValue';
    case 'primitiveValue':
      return 'primitiveLiteral';
    default:
      return itemRule;
  }
}