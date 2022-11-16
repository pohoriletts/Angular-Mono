export interface IExchangeRate {
    name: string,
    symbol: string,
    code: number,
    rateSell: Float32Array,
    rateBuy: Float32Array,
};