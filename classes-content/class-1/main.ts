// reference: http://es6-features.org/

// Variable declarations
var myVar = "my variable";
let mySecVar = "my second variable";
const myThrVar = "my third variable";
let typedVariable: string;
// typedVariable = 5; --> error
typedVariable = "only strings";

// Functions
function myFunc(x, y) {
    return x + y;
}

// Classes
var MathClassJS  = function (teacherName) {
    this.teacherName = teacherName;
};
MathClassJS.prototype.sum = function (x, y) {
    return x + y;
};

class MathClass {
    private teacherName: string;

    constructor(teacherName) {
        this.teacherName = teacherName;
    }

    sum(x, y){
        return x + y;
    }
}

// Arrow Functions
var numbers = [1, 2, 3];

numbers.map(function(value) {
    return value * 2;
});

numbers.map(value => value * 2);
