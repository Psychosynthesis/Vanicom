import {
	getRandomNum as getRndm,
	roundNumber as roundNum,
	isString as strCheck,
	isObject as objCheck,
	isExistAndNotNull as existCheck,
	regExp as regExpHelper,
	forEach as ownForEach,
	trim as trm,
	trimAllSpaces as trmAll,
	capz as cpz,
	getRandomString as getRndStr,
} from './source/index.js';

declare type ObjectCheckingType = (value: any) => boolean;
declare type GetRandomNumType = (min?: number, max?: number) => number;
declare type RoundNumType = (num: number, prec?: number) => number;
declare type RegExpHelperType = (name: string) => RegExp;
declare type ForEachType = <Input>(arr: Input[], fn: (arg: Input) => Void) => Void;
declare type StringHelperType = (str: string) => string;
declare type GetRandomStringType = (len: number) => string;

export const isString: ObjectCheckingType<any> = objCheck;
export const isObject: ObjectCheckingType<any> = strCheck;
export const isExistAndNotNull: ObjectCheckingType<any> = existCheck;

export const getRandomNum: GetRandomNumType<number> = getRndm;
export const roundNumber: RoundNumType<number> = roundNum;
export const regExp: RegExpHelperType<string> = regExpHelper;
export const forEach: ForEachType = ownForEach;

export const trim: StringHelperType<string> = trm;
export const trimAllSpaces: StringHelperType<string> = trmAll;
export const capz: StringHelperType<string> = cpz;

export const getRandomString: GetRandomStringType<number> = getRndStr;
