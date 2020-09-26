describe('testing', function() {

    var obj = require("./object.js");

    console.log(obj.colour);
    
    obj.getModel();
    
    it('Calculate', function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

        obj.input1.sendKeys(7);

       
       
    });
     
    });