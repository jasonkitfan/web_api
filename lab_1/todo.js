"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var items = [];
var input;
do {
    input = String(readline.question('enter command: ')).trim();
    if (input.indexOf('add ') === 0) {
        var space = input.indexOf(' ');
        var item = input.substring(space).trim();
        console.log("adding \"".concat(item, "\""));
        items.push(item);
    }
    if (input.indexOf('list') === 0) {
        for (var i = 0; i < items.length; i++) {
            console.log("".concat(i, ". ").concat(items[i]));
        }
    }
} while (input !== 'exit');
