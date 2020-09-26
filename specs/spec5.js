describe('testing', function() {
    it('Calculate', function() {

        browser.waitForAngularEnabled(false);
        
        browser.get('https://www.google.com/');
   
       
        element(by.name('q')).sendKeys("hello");

        browser.sleep(10000);

        element(by.css("input[class='gNO89b']")).click();

        browser.sleep(10000);


    });
});