declare type ObjectCheckingType = (value: any) => boolean;
declare type GetRandomNumType = (min?: number, max?: number) => number;
declare type RoundNumType = (num: number, prec?: number) => number;
declare type RegExpHelperType = (name: string) => RegExp;
declare type StringHelperType = (str: string) => string | '';
declare type GetRandomStringType = (len: number) => string;
declare type EventGetter = (eve: Event) => EventTarget;
declare type DOMNodeInput = (node: Node | null) => void;
declare type VoidFunc = () => void;
declare type ToastParams = { message: string, class: string, duration: number } | string;

// Через интерфейсы более читаемо:
declare interface ForEachFunction {
  <T>(list: T[], fn: (item: T, index: number, array: T[]) => void, scope?: any): void;
}

declare interface ForEachKeyFunction {
  <T extends object>(obj: T, fn: (key: keyof T, value: T[keyof T], obj: T) => void, scope?: any): void;
}


export const getTime: (date?: string | Date | number) => string; // Get time from timestamp (22:34) or current time

export const isString: ObjectCheckingType;
export const isObject: ObjectCheckingType;
export const isExistAndNotNull: ObjectCheckingType;

export const getRandomNum: GetRandomNumType;
export const roundNumber: RoundNumType;
export const regExp: RegExpHelperType;
export const forEach: ForEachFunction;
export const forEachKey: ForEachKeyFunction;

export const trim: StringHelperType;
export const trimAllSpaces: StringHelperType;
export const capz: StringHelperType;

export const getRandomString: GetRandomStringType;
export const getCookie: StringHelperType;

export const getEventTarget: EventGetter;
export const deleteNode: DOMNodeInput;

export const HideToast: VoidFunc;
export const Toast: (parms: ToastParams) => void;

export declare const setCookie: (
  name: string,
  value: string,
  lifetime?: number | null
) => void;

export declare const setLocalItem: (
  key: string,
  value: any,
  exp: number
) => void;

export declare const getLocalItem: <T = any>(key: string) => T | null;
