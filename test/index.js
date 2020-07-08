const processArgvs = require('../src/index.js');

// node test/index.js -a a -b b -c c1 c2 c3 -d d1 d2
const argvs = processArgvs({
    prefix: '-',
    requireAll: true,
    require: {
        a: String,
        b: Boolean,
        c: Array
    } 
});
console.warn(argvs);