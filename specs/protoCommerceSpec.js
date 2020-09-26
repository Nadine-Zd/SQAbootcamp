var using = require('jasmine-data-provider');
const { browser, ExpectedConditions } = require('protractor');
//const { browser } = require('protractor');

describe('testing', function() {

    var protoCommerceHome = require ("../pages/protoCommerceHomePage.js");

    var protoCommerceDataHome = require ("../data/dataProtoCommerceHome.js");

    
    it('ProtoCommerce', function() {

        browser.get('https://rahulshettyacademy.com/angularpractice/');
            
        protoCommerceHome.name(protoCommerceDataHome.data.name);
    
        protoCommerceHome.email.sendKeys(protoCommerceDataHome.data.email);
    
        protoCommerceHome.password.sendKeys(protoCommerceDataHome.data.password);
        
        protoCommerceDataHome.data.iceCreamLover.click();
        
        protoCommerceDataHome.data.gender.click();
        
        protoCommerceDataHome.data.status.click();
        
        protoCommerceHome.dateOfBirth.sendKeys(protoCommerceDataHome.data.dateOfBirth);
        
        protoCommerceHome.submitButton.click();
        
        expect (protoCommerceHome.message.getText()).toContain(protoCommerceDataHome.data.result);
    
    });
});

