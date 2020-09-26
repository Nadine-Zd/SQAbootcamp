describe('testing', function() {
    
    function add(a,b){

        element(by.model('first')).sendKeys(a);

        element(by.model('second')).sendKeys(b);

        element(by.id('gobutton')).click();


    }
    it('Calculate', function() {
        
       browser.waitForAngularEnabled(false);
       
        browser.get('https://google.com');

        browser.waitForAngularEnabled(true);

        browser.get('http://juliemr.github.io/protractor-demo/');

        add(7,4);
        add(8,2);
        add(6,4);

        element.all(by.repeater('result in memory')).count().then(function(result){
            
            console.log(result);
        
        });
        
        element.all(by.repeater('result in memory')).each(function(answer){
            answer.element(by.css("td:nth-child(3)")).getText().then(function(results){
                console.log(results);
            });
        });
      
        element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){

            console.log(result);
        });



        
            
        
        
    });
});