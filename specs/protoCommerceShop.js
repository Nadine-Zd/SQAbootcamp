var using = require('jasmine-data-provider');
const { browser, ExpectedConditions } = require('protractor');
//const { browser } = require('protractor');

describe('testing', function() {

    var protoCommerceShop = require ("../pages/protoCommerceHomePage.js");

    var protoCommerceDataHome = require ("../data/dataProtoCommerceHome.js");

    var protoCommerceShop = require ("../pages/protoCommerceShopPage.js");

    using(protoCommerceDataHome.data , function(dataSet, description){
    
    it('ProtoCommerce', function() {

        browser.get('https://rahulshettyacademy.com/angularpractice/');
            
        protoCommerceShop.name(dataSet.name);
        protoCommerceShop.email(dataSet.email);
    
        protoCommerceShop.password(dataSet.password);
        
        protoCommerceShop.enableCheckbox();
        
        protoCommerceShop.selectGender(dataSet.gender);
        
        protoCommerceShop.employmentStatus(dataSet.eStatus);
        
        protoCommerceShop.enterBirthday(dataSet.dateOfBirth);
        
        protoCommerceShop.clickSubmitButton();

        //expect (protoCommerceHome.message.getText()).toContain(dataSet.result);
        protoCommerceShop.assertSuccessMessage(dataSet.successMessage);

        protoCommerceShop.clearName();

        protoCommerceShop.name(dataSet.shortName);

        protoCommerceShop.assertNameError(dataSet.nameCharactersLimit);
       
        protoCommerceShop.clickShop();
        protoCommerceShop.clickFirstAdd();
        protoCommerceShop.clickFirstAdd2();
        //protoCommerceShop.assertCheckout();

        protoCommerceShop.clickCheckout();
        protoCommerceShop.clickCheckoutButton();
        //protoCommerceShop.enterLocation('lg');
        protoCommerceShop.enterLocationAction('be');
        protoCommerceShop.selectOption();
        protoCommerceShop.clickPurchase();

        browser.sleep(5000);

    });
    });
});