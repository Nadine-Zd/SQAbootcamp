const { element, ExpectedConditions, browser } = require("protractor");

function protoCommerceShop(){
    
    this.name = function(value){
        element.all(by.name('name')).get(0).sendKeys(value);
    };

    this.clearName = function(){
        element.all(by.name('name')).get(0).clear();
    };

    this.email = function(value){
        element(by.name('email')).sendKeys(value);
    };

    this.password = function(value){
        element(by.id('exampleInputPassword1')).sendKeys(value);
    };

    this.enableCheckbox = function(){
        element(by.id('exampleCheck1')).click();
    };

    // this.selectGender = function(){
    //     element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
    // };

    this.selectGender = function(value){

        if (value == 'Male'){
            element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Male")).click();
        }
        else if (value == 'Female'){
            element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Female")).click();
        };
    };

    this.employmentStatus = function(value){

        if (value == "Student"){
            element.all(by.name('inlineRadioOptions')).get(0).click();
        }

        else if (value == "Employed"){
            element.all(by.name('inlineRadioOptions')).get(1).click();
        };               
        
    };

    this.enterBirthday = function(value){
        element(by.name('bday')).sendKeys(value);
    };

    this.clickSubmitButton = function(){
        element(by.css("input[class*='btn']")).click();
    };

    this.assertSuccessMessage = function(value){
        element(by.css("div[class*='alert-success']")).getText().then(function(success){

            //console.log(success);

            expect(success).toContain(value);
            //expect(success).toBe(value);

        });
    };

    this.assertNameError = function(value){
        element(by.css("div[class='alert alert-danger']")).getText().then(function(message){

            expect(message).toBe(value);

        });

    };

    this.clickShop = function(){
        element(by.linkText('Shop')).click();
    };

    this.clickFirstAdd = function(){
        element.all(by.css("button[class='btn btn-info']")).get(0).click();
    };

    this.clickFirstAdd2 = function(){
        element.all(by.className("btn btn-info")).get(0).click();
    };

    this.assertCheckout = function(value){

        element(by.partialLinkText('Checkout')).getText().then(function(assertion){

            // expect(assertion).toContain();
            //console.log(assertion);

            var split = assertion.split("(");
            //console.log(split[0]);
            console.log(split[1]);

            var x = split[1].trim().charAt(0);
            console.log(x);
            var y=x+1;
            console.log(y);

            expect(x).toBe(value);

            // var split = assertion.split("(");
            // console.log(split[0]);
            // console.log(split[1]);


        });

        this.clickCheckout = function(){
            element(by.css("a[class = 'nav-link btn btn-primary']")).click();
        }

        this.clickCheckoutButton = function(){
            element(by.css("button[class='btn btn-success']")).click();
        }

        this.enterLocation = function(value){
            element(by.id("country")).sendKeys(value);
        }

        this.enterLocationAction = function(value){
            browser.actions().mouseMove(element(by.id("country"))).sendKeys(value).perform;
        }

        this.keyDown = function(value){
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        }

        this.keyEnter = function(value){
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        }

        this.selectOption = function(){
            element(by.css("div[class = 'suggestions']")).element(by.css('a')).click();
        }


        this.clickPurchase = function(){
            element(by.buttonText("Purchase")).click();
        }


        this.purchaseMessage = function (value){
            element(by.css("div[class = 'alert alert-success alert-dismissible']")).getText().then(function(message){
                expect(message).toBe(value);
            });
        }
    };
  

};

module.exports = new protoCommerceShop();