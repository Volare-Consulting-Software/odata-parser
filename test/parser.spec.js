const expect = require("chai").expect;

const Parser = require("../lib/parser").Parser;

describe("Parser", () => {
  it("should instantiate odata parser", () => {
    var parser = new Parser();
    var ast = parser.filter("Categories/all(d:d/Title eq 'alma')");
    expect(
      ast.value.value.value.value.next.value.value.predicate.value.value.right
        .value
    ).to.equal("Edm.String");
  });

  it("should parse query string", () => {
    var parser = new Parser();
    var ast = parser.query("$filter=Title eq 'alma'");
    expect(ast.value.options[0].type).to.equal("Filter");
  });

  it("should parse multiple orderby params", () => {
    var parser = new Parser();
    var ast = parser.query("$orderby=foo,bar");
    expect(ast.value.options[0].value.items[0].raw).to.equal("foo");
    expect(ast.value.options[0].value.items[1].raw).to.equal("bar");
  });

  it("should parse custom query options", () => {
    var parser = new Parser();
    var ast = parser.query("foo=123&bar=foobar");
    expect(ast.value.options[0].value.key).to.equal("foo");
    expect(ast.value.options[0].value.value).to.equal("123");
    expect(ast.value.options[1].value.key).to.equal("bar");
    expect(ast.value.options[1].value.value).to.equal("foobar");
  });

  it("should parse addition to now", () => {
    var parser = new Parser();
    console.log("AHHH");
    var ast = parser.filter("foo ge now() + 365 day");
    console.log("AHHH");
    console.log(JSON.stringify(ast.value));
    expect(ast.value.left.raw).to.equal("foo");
    expect(ast.value.right.raw).to.equal("now() + 1 day");
  });

  it("should parse subtraction from now", () => {
    var parser = new Parser();
    var ast = parser.filter("foo eq now()");
    expect(ast.value.left.raw).to.equal("foo");
    expect(ast.value.right.raw).to.equal("now()");
  });

  it("should throw error parsing invalid custom query options", () => {
    var parser = new Parser();
    var error = false;
    try{
      var ast = parser.query("$foo=123");
      error = true;
    }catch(err){}
    expect(error).to.be.false;
  });
});
