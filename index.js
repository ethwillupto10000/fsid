"use strict";
exports.__esModule = true;
exports.buildShortUUID = exports.buildUUID = void 0;
var hexList = [];
for (var i = 0; i <= 15; i++) {
    hexList[i] = i.toString(16);
}
function buildUUID() {
    var uuid = '';
    for (var i = 1; i <= 36; i++) {
        if (i === 9 || i === 14 || i === 19 || i === 24) {
            uuid += '-';
        }
        else if (i === 15) {
            uuid += 4;
        }
        else if (i === 20) {
            uuid += hexList[(Math.random() * 4) | 8];
        }
        else {
            uuid += hexList[(Math.random() * 16) | 0];
        }
    }
    return uuid.replace(/-/g, '');
}
exports.buildUUID = buildUUID;
var unique = 0;
function buildShortUUID(prefix) {
    if (prefix === void 0) { prefix = ''; }
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
}
exports.buildShortUUID = buildShortUUID;
