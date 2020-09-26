const { browser } = require("protractor");

describe('testing', function() {

    var jsData = require ("./data.js");

    it('Calculate', function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys(jsData.data.firstInput);
        
        element(by.model('second')).sendKeys(jsData.data.secondInput);
        
        element(by.id('gobutton')).click();
        
        // tagname[attribute='value']
        //element(by.css("h2[class='ng-binding']")).getText().then(function(result){

           // console.log(result);

       // })
        
       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(jsData.data.result);
       
       browser.sleep(10000);
       
    });
});

