describe('testing', function() {
    
    function operation(a,b){

        element(by.model('first')).sendKeys(a);

        element(by.model('second')).sendKeys(b);

        element(by.id('gobutton')).click();

        
        element.all(by.repeater('result in memory')).each(function(answer){
            answer.element(by.css("td:nth-child(3)")).getText().then(function(results){
                console.log(results);
            });
        });



    }
    it('Calculate', function() {
        

        browser.get('http://juliemr.github.io/protractor-demo/');

        operation(7,4);
        
        
        
    });
});