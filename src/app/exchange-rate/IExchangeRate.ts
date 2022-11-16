export interface IExchangeRate {
    currencyCodeA: number,
    currencyCodeB: number,
    date:number,

    name: string,
    symbol: string,
    rateSell: Float32Array,
    rateBuy: Float32Array,
    rateCross: Float32Array
};