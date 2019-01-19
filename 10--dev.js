"use strict";

let log = console.log;
let error = description => {
    console.error(description);
    throw new Error(description);
};

let notlogged = function(fname, f) {
    return f;
};

let logged = function(fname, f) {
    return function() {
        // log("# " + fname + "(", arguments, ") &");
        let res = f.apply(this, arguments);
        log("# " + fname + "(", arguments, ") -> ", res);
        return res;
    };
};