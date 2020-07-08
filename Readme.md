## process-argvs

计算 node process 脚本参数

### 使用示例

```javascript
// 调用语句示例: node test/index.js -a a -b b -c c1 c2 c3 -d d1 d2

const processArgvs = require('process-argvs');

processArgvs({
    prefix: '-',
    requireAll: true,
    require: {
        a: String,
        b: Boolean,
        c: Array
    } 
});

// return 
{ 
    data: { 
        a: 'a', 
        b: true, 
        c: [ 'c1', 'c2', 'c3' ], 
        d: 'd1' 
    },
    first: { 
        key: 'a', 
        value: 'a' 
    } 
}

```

### 参数说明
参数     | 类型 | 是否必传 | 默认值 | 说明
-------- | --- | --- | --- | ---
prefix | String | 否 | - | 参数前缀，默认为“-”，也可以使用 “--”，或者其他前缀
requireAll | Boolean | 否 | true | 是否获取所有参数，设置为 false 后只会返回包含在 require 中的参数据
require | Object | 否 | undefined | 包含数据类型，键值对形式，值支持 String/Boolean/Array