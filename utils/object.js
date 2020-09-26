function car(){
    this.colour = "red";
    this.brand = "BMW";

    this.input1 = element(by.model('first'));

    this.getModel = function(){

        console.log("I am here!");

    };
};

// var a = new car;
// console.log(a.colour);
// a.getModel;

module.exports = new car();