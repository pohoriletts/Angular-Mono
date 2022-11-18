export interface IExchangeRate {
    currencyCodeA: number,
    currencyCodeB: number,
    date: number,
    rateBuy: Float32Array,
    rateSell: Float32Array,
    rateCross: Float32Array
    shortName: string,
    fullName: string,
    flag: string,
};