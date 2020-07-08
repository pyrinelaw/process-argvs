const path = require('path');
const processArgvs = require('../src/index.js');
const { SSL_OP_PKCS1_CHECK_1 } = require('constants');

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