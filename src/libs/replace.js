"use strict";
exports.__esModule = true;
exports.replaceRelativePath = exports.replaceDesignWidth = exports.replaceIsRpx = exports.replacePlatform = exports.replaceSize = exports.replaceNames = void 0;
var path_1 = require("path");
var replaceNames = function (content, names) {
    return content.replace(/#names#/g, names.join("' | '"));
};
exports.replaceNames = replaceNames;
var replaceSize = function (content, size) {
    return content.replace(/#size#/g, String(size));
};
exports.replaceSize = replaceSize;
var replacePlatform = function (content, platform) {
    return content.replace(/#platform#/g, platform);
};
exports.replacePlatform = replacePlatform;
var replaceIsRpx = function (content, useRpx) {
    return content
        .replace(/#rpx-1:(.+?):#/g, useRpx ? '$1' : '')
        .replace(/#rpx-0:(.+?):#/g, useRpx ? '' : '$1');
};
exports.replaceIsRpx = replaceIsRpx;
var replaceDesignWidth = function (content, designWidth) {
    return content
        .replace(/#designWidth#/g, designWidth);
};
exports.replaceDesignWidth = replaceDesignWidth;
var replaceRelativePath = function (content, saveDir) {
    var relativePath = path_1["default"]
        .relative(path_1["default"].resolve('src'), path_1["default"].resolve(saveDir))
        // To resolve the path separator on windows
        .replace(/\\/g, '/');
    return content.replace(/#relativePath#/g, relativePath);
};
exports.replaceRelativePath = replaceRelativePath;
