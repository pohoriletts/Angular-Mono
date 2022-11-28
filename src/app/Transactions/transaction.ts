export interface ITransaction {
    id:number,
    sum: number,
    typeTransactionID: number,
    typeTransaction: string,
    dateTime: Date,
    senderName: string
    recipientName: string,
    description?: string
}