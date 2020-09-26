var using = require('jasmine-data-provider');
const { browser, ExpectedConditions } = require('protractor');
//const { browser } = require('protractor');

describe('testing', function() {

    var protoCommerceHome = require ("../pages/protoCommerceHomePage.js");

    var protoCommerceDataHome = require ("../data/dataProtoCommerceHome.js");

    using(protoCommerceDataHome.data , function(dataSet, description){
    
    it('ProtoCommerce', function() {

        browser.get('https://rahulshettyacademy.com/angularpractice/');
            
        protoCommerceHome.name(dataSet.name);
        protoCommerceHome.email.sendKeys(dataSet.email);
    
        protoCommerceHome.password.sendKeys(dataSet.password);
        
        dataSet.iceCreamLover.click();
        
        dataSet.gender.click();
        
        dataSet.status.click();
        
        protoCommerceHome.dateOfBirth.sendKeys(dataSet.dateOfBirth);
        
        protoCommerceHome.submitButton.click();

        //expect (protoCommerceHome.message.getText()).toContain(dataSet.result);
        protoCommerceHome.message(dataSet.result);
       
        
    });
    });
});
