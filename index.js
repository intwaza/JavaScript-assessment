//2.
// As we know functions are objects and objects can be passed as an argument of functions, 
//so this means that functions also can be passed as an argument of another function and function that passed as argument of another function is called a callback function.
//Callback functions are functions that has been passed as an argument of another function
// In the example below I have used setInterval which is a function and it taking another function as a parameter

setInterval(function (){
    console.log("Hi");
},3000);
// In the example below also person function is an argument of school function and person function is passed as an argument of school by calling it callback 
// and when you see line 16 we are calling function person and then after when are calling function school we will pass callback which was a parameter of function school as person function.
function person(name,age){
    console.log(`${name} you are ${age} years old`);
}

function school(firstName,lastName,age,callback){
    var student=`${firstName} ${lastName}`;
    callback(student,age);
}
school("Intwaza","Belyse",20,person);

// from the above example you can seen how callback function works and I have said above a callback function is a function that is an argument of another functions, 
// so this shows that a function can be passed as an argument of another function.


//3.
var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

//  the code above will output this outer func:  this.name = bar
// outer func:  self.name = bar
// inner func:  this.name = undefined
// inner func:  self.name = bar
// because var self = this, this this used in the outer func to be able to access name 
// and self.name will also give us bar because we have assigned it to this (self.name=this)
// this.name in inner function is give us identifier because this only refers to the inner variables so this identifier will only refer itself to the outer function but when it comes to inner function it will be undefined 
//it will also give us undefined because inner function can not access global variable which is name 


//4. this identifier has been used as a value of variable self and this identifier is globbal variable 
// var self = this; allows code in a closure to refer back to the parent scope.