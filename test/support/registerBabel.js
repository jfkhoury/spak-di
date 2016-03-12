var register = require("babel/register");

register({
    ignore: /node_modules(?:\/|\\)(?!@yuzu|spak)/,
    optional: ["es7.decorators"]
});
