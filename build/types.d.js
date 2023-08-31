"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimAllSpaces = exports.trim = exports.regExp = exports.isString = exports.isObject = exports.isExistAndNotNull = exports.getRandomString = exports.getRandomNum = exports.forEach = exports.capz = void 0;
var _index = require("./index.js");
declare type ObjectCheckingType = (value: any) => boolean;
declare type GetRandomNumType = (min?: number, max?: number) => number;
declare type RegExpHelperType = (name: string) => RegExp;
declare type ForEachType = <Input>(arr: Input[], fn: (arg: Input) => Void) => Void;
declare type StringHelperType = (str: string) => string;
declare type GetRandomStringType = (len: number) => string;
var isString: ObjectCheckingType<any> = _index.isObject;
exports.isString = isString;
var isObject: ObjectCheckingType<any> = _index.isString;
exports.isObject = isObject;
var isExistAndNotNull: ObjectCheckingType<any> = _index.isExistAndNotNull;
exports.isExistAndNotNull = isExistAndNotNull;
var getRandomNum: GetRandomNumType<number> = _index.getRandomNum;
exports.getRandomNum = getRandomNum;
var regExp: RegExpHelperType<string> = _index.regExp;
exports.regExp = regExp;
var forEach: ForEachType = _index.forEach;
exports.forEach = forEach;
var trim: StringHelperType<string> = _index.trim;
exports.trim = trim;
var trimAllSpaces: StringHelperType<string> = _index.trimAllSpaces;
exports.trimAllSpaces = trimAllSpaces;
var capz: StringHelperType<string> = _index.capz;
exports.capz = capz;
var getRandomString: GetRandomStringType<number> = _index.getRandomString;
exports.getRandomString = getRandomString;