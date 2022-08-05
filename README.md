# A faster * Simpler uuid generator

## Function Inside
```javascript
buildUUID
buildShortUUID
```

## Usage
```javascript
const fsid = require('../uuid2')
console.log(uuid2)
// {
//    __esModule: true,
//    buildUUID: [Function: buildUUID],
//    buildShortUUID: [Function: buildShortUUID]
// }

// Base: length 32 uuid
uuid.buildUUID()
// console:
// 'd8a7100874be45719b2e3cb7fcf73fd6'

// Base: length 24 uuid
uuid.buildShortUUID()
// console:
// '_88136188821659679135184'

// Add an custome prefix
const prefix = 'usr_'
uuid.buildShortUUID(prefix)
// console:
// 'usr_88136188821659679135184'
```

## Installation

- Please use `npm/yarn` install this package
```shell
npm i uuid2 --save
# or
yarn i uuid2 --save
```
- `import` or `require` what you need
```javascript
// in node.js
const uuid2 = require('uuid2')
```
