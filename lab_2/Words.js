var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Words = /** @class */ (function () {
    function Words() {
        this.d = [];
    }
    Words.prototype["delete"] = function (idx) {
        this.d.splice(idx, 1);
    };
    return Words;
}());
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drawer.prototype.read = function (count) {
        return this.d[count];
    };
    Drawer.prototype.write = function (data) {
        this.d.push(data);
    };
    return Drawer;
}(Words));
var box = new Drawer();
box.write('apple');
box.write('orange');
box.write('banana');
box.write('pear');
console.log(box.d);
box["delete"](1);
console.log(box.d);
