var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        console.log("\"Students Name: ".concat(this.name, "\""));
    }
    return Student;
}());
var s1 = new Student("pk");
// console.log(s1.name);  // private propeties
