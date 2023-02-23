"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var items = [];
var input;
do {
    input = String(readline.question('enter command: ')).trim();
    var space = input.indexOf(' ');
    var item = input.substring(space).trim().toLowerCase();
    var index = items.indexOf(item);
    console.log(item);
    console.log(item.length);
    if (input.indexOf('add ') === 0) {
        if (items.includes("item")) {
            console.log("".concat(item, " already exist: catch by include"));
            continue;
        }
        if (items.indexOf(item) >= 0) {
            console.log("\"".concat(item, " already exist: catch by index\""));
            continue;
        }
        console.log("adding \"".concat(item, "\""));
        items.push(item);
    }
    if (input.indexOf('remove ') === 0) {
        if (index >= 0) {
            console.log("\"remove ".concat(item, "\""));
            items.splice(index, 1);
        }
        else {
            console.log("item not found");
        }
    }
    if (input.indexOf('list') === 0) {
        for (var i = 0; i < items.length; i++) {
            console.log("".concat(i, ". ").concat(items[i]));
        }
    }
} while (input !== 'exit');
