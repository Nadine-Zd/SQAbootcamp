describe('testing', function() {
    it('Calculate', function() {
        
       browser.waitForAngularEnabled(false);
       
        browser.get('https://google.com');

        browser.waitForAngularEnabled(true);

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(7);

        element(by.model('second')).sendKeys(4);

        element(by.id('gobutton')).click();

        // tagname[attribute='value']
        //element(by.css("h2[class='ng-binding']")).getText().then(function(result){

           // console.log(result);

       // })
       
       //tagname[attribute="value"]

       element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(result){
          
        console.log(result);
       
    });
     
    });
});