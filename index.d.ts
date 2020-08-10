// array
export function arrayEqual(arr1: any[], arr2: any[]): boolean;
export function arrayEach(arr: any[], callback: (item: any, index: number) => void): void;
export function arrFlat2complex(arr: any[], num: number): any[];
// object
export function isPlainObject(obj: object): boolean;
export function assign(flag: boolean, targetObj: object, obj1: object, ...objs: object[]): object;
export function deepClone(obj: object): object;
export function isEmptyObject(obj: any): boolean;
// cookie
export function setCookie(name: string, value: string, date: Date): void;
export function getCookie(name: string): string;
export function removeCookie(name: string): void;
// url
export function urlQuery2Object(url: string): object;
export function object2UrlQuery(obj: object): string;
// type
export function toType(arg: any): string;
// bom
export function browser(): void;
export function ajax(options: object): void;
// dom
export function domEval(scriptStr: string): void;
export function trigger(ele: Element, eventName: string): void;
export function getStyle(ele: Element, cssName: string): string;
export function parseHTML(htmlStr: string): Element;
export function getTopLeftInBody(ele: Element): object;
export function hasClassName(ele: Element, className: string): boolean;
export function addClassName(ele: Element, className: string): void;
export function removeClassName(ele: Element, className: string): void;
export function isParentNode(childNode: Element, parentNode: Element, flag?: boolean): boolean;
// string
export function price2chinese(price: number): string;
export function stringLengthByType(str: string): number;
// date
export function date2string(...arg: any[]): string;
export function getRangeDate(dateFlag: string): string[];
// random
export function randomNum(num1: number, num2: number, flag: boolean): number;
export function randomColor(): string;
// function
export function debounce(callback: ()=> void, timeOut: number): void;
export function throttle(callback: ()=> void, timeOut: number): void;
// export function curry = fn.curry; // 暂时不知道如何声明
// export function compose = fn.compose; // 暂时不知道如何声明
// inter既是一个函数对象，也含有stop属性
export function interval(): {
  (fn: ()=> void, timeOut: number): void; // 声明了interval函数本身
  stop(): void // 声明了interval对象里的stop属性
}