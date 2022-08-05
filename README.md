# : A faster(f) & Simpler(s) uuid generator

## Function Inside
```javascript
buildUUID
buildShortUUID
```

## Usage
```javascript
const fsid = require('fsid')
console.log(fsid)
// {
//    __esModule: true,
//    buildUUID: [Function: buildUUID],
//    buildShortUUID: [Function: buildShortUUID]
// }

// Base: length 32 uuid
fsid.buildUUID()
// console:
// 'd8a7100874be45719b2e3cb7fcf73fd6'

// Base: length 24 uuid
fsid.buildShortUUID()
// console:
// '_88136188821659679135184'

// Add an custome prefix
const prefix = 'usr_'
fsid.buildShortUUID(prefix)
// console:
// 'usr_88136188821659679135184'
```

## Installation

- Please use `npm/yarn` install this package
```shell
npm i fsid --save
# or
yarn i fsid --save
```
- `import` or `require` what you need
```javascript
// in node.js
const fsid = require('fsid')
```
