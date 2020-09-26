describe('testing', function() {
    it('Calculate', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(7);
        element(by.model('second')).sendKeys(4);
        element(by.id('gobutton')).click();
        // tagname[attribute='value']
        //element(by.css("h2[class='ng-binding']")).getText().then(function(result){

           // console.log(result);

       // })
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("11"); 
    });
});

