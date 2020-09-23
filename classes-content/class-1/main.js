// reference: http://es6-features.org/
// Variable declarations
var myVar = "my variable";
var mySecVar = "my second variable";
var myThrVar = "my third variable";
var typedVariable;
// typedVariable = 5; --> error
typedVariable = "only strings";
// Functions
function myFunc(x, y) {
    return x + y;
}
// Classes
var MathClassJS = function (teacherName) {
    this.teacherName = teacherName;
};
MathClassJS.prototype.sum = function (x, y) {
    return x + y;
};
var MathClass = /** @class */ (function () {
    function MathClass(teacherName) {
        this.teacherName = teacherName;
    }
    MathClass.prototype.sum = function (x, y) {
        return x + y;
    };
    return MathClass;
}());
// Arrow Functions
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; });
