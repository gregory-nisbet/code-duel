var SandCastle = require('sandcastle').SandCastle;

var sandcastle = new SandCastle();

var script = sandcastle.createScript("\
  exports.main = function() {\
    exit('Hey ' + name + ' Hello World!');\
  }\
");

script.on('exit', function(err, output) {
    console.log(output); // Hello World!
});

script.run({name: 'Ben'});// we can pass variables into run.