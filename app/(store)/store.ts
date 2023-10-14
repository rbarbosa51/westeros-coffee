import { create } from "zustand";

export interface Transaction {
    priceId: string
    quantity: number
}
export interface TransactionStore {
    transaction: Transaction[]
}

export const useStore = create<TransactionStore>((set) => ({
    transaction: [],
    addTransaction: (priceId: string, quantity: number) => {
        set(state => (
            {transaction: [...state.transaction, {priceId: priceId, quantity: quantity} as Transaction] }
        ))
    },
    removeTransaction: (id: string) => {
        set(state => ({
            transaction: state.transaction.filter(t => t.priceId !== id)
        }))
    }
}))