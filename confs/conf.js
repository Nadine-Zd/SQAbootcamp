var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../specs/spec13.js'],

  onPrepare: function() {

    browser.driver.manage().window().maximize();

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: '../ReportFolder/screenshots',
        takeScreenshots: true
      })
    );


 }
}
