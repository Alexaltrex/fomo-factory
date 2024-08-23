import {action, makeObservable, observable} from "mobx";

export enum TransactionStatusEnum {
    pending = "pending",
    success = "success",
    error = "error"
}

interface ITransactionAlert {
    id: string
    status: TransactionStatusEnum
    text: string
    show: boolean
}

export class CryptoStore {
    transactionAlerts = {} as { [key: string]: ITransactionAlert }

    constructor() {
        makeObservable(this,
            {
                transactionAlerts: observable,

                addTransactionAlert: action.bound,
                changeTransactionAlert: action.bound,
            }
        )
    }

    addTransactionAlert(id: string, text: string) {
        this.transactionAlerts = {
            ...this.transactionAlerts,
            [id]: {
                id,
                status: TransactionStatusEnum.pending,
                text,
                show: true
            }
        }
    }

    changeTransactionAlert(transactionAlert: ITransactionAlert) {
        this.transactionAlerts[transactionAlert.id] = transactionAlert
    }

    closeTransactionAlert(id: string) {
        this.transactionAlerts[id].show = false
    }
}