declare type ObjectCheckingType = (value: any) => boolean;
declare type GetRandomNumType = (min?: number, max?: number) => number;
declare type RoundNumType = (num: number, prec?: number) => number;
declare type RegExpHelperType = (name: string) => RegExp;
declare type ForEachType = <Input>(arr: Input[], fn: (arg: Input) => void) => void;
declare type StringHelperType = (str: string) => string;
declare type GetRandomStringType = (len: number) => string;

export const isString: ObjectCheckingType;
export const isObject: ObjectCheckingType;
export const isExistAndNotNull: ObjectCheckingType;

export const getRandomNum: GetRandomNumType;
export const roundNumber: RoundNumType;
export const regExp: RegExpHelperType;
export const forEach: ForEachType;

export const trim: StringHelperType;
export const trimAllSpaces: StringHelperType;
export const capz: StringHelperType;

export const getRandomString: GetRandomStringType;
export const getCookie: StringHelperType;
