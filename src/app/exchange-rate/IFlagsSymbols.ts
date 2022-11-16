export interface InternationalFormat {
    code: number;
    name: string,
    symbol: string,
}
export const ARR_INTERNATIONAL_FORMAT: InternationalFormat[] = [
    { code: 826, name: "GBP", symbol: '🇬🇧' },
    { code: 840, name: "USD", symbol: '🇺🇸' },
    { code: 978, name: "EUR", symbol: '🇪🇺' },
    { code: 392, name: "JPY", symbol: '🇯🇵' },
    { code: 156, name: "CNY", symbol: '🇨🇳' },
    { code: 124, name: "CAD", symbol: '🇨🇦' },
    { code: 980, name: "UAH", symbol: '🇺🇦' },
    { code: 752, name: "SEK", symbol: '🇸🇪' },
]