const { element } = require("protractor");

function protoCommerceHome(){

    this.name = function(value){
        element.all(by.name('name')).get(0).sendKeys(value);
    };
    
    this.clearName = function(){
        element.all(by.name('name')).get(0).clear();
    }
    
    this.email = element(by.name('email'));

    this.password = element(by.id('exampleInputPassword1'));

    this.check = element(by.id('exampleCheck1'));

    this.female = element(by.id('exampleFormControlSelect1')).element(by.cssContainingText('option', 'Female'));
    
    this.male = element(by.id('exampleFormControlSelect1')).element(by.cssContainingText('option', 'Male'));
    
    this.student = element(by.id('inlineRadio1'));

    this.employed = element(by.id('inlineRadio2'));

    this.dateOfBirth = element(by.name('bday'));

    this.submitButton = element(by.className('btn btn-success'));

    //this.message = element(by.className('alert alert-danger'));
    this.message = function(value){
        element(by.css("div[class ='alert alert-danger']")).getText().then(function(message){
            expect (message).toBe(value);
        })
    }
    
};
module.exports = new protoCommerceHome();