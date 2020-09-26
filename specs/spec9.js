describe('testing', function() {
    it('Calculate', function() {

        browser.waitForAngularEnabled(false);
       
        browser.get('https://google.com');

        browser.waitForAngularEnabled(true);

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(7);

        element(by.model('second')).sendKeys(4);

        element(by.id('gobutton')).click();

        
        element(by.model('first')).sendKeys(6);

        element(by.model('second')).sendKeys(4);

        element(by.id('gobutton')).click();

        
        element(by.model('first')).sendKeys(8);

        element(by.model('second')).sendKeys(4);

        element(by.id('gobutton')).click();

        var sum=[11,10,12];

        element.all(by.repeater('result in memory')).count().then(function(result){
            
            console.log(result);
        
        });
   
        
    var i = 0;

        element.all(by.repeater('result in memory')).each(function(answer){
            
            answer.element(by.css("td:nth-child(3)")).getText().then(function(results){
                
                console.log(results);

                expect(results).toBe(sum[i]);

                i = i + 1;
        

            });
            
            
            
        });
      


        
            
        
        
    });









});
