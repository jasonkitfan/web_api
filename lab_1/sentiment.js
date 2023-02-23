"use strict";
exports.__esModule = true;
var Sentiment = require("sentiment");
var sentiment = new Sentiment();
var minParam = 3;
try {
    console.log(process.argv);
    if (process.argv.length < minParam)
        throw new Error('missing parameters');
    var words = process.argv.slice(minParam - 1).join(' ');
    console.log(words);
    var result = sentiment.analyze(words);
    console.log(result);
}
catch (err) {
    console.log(err.message);
}
