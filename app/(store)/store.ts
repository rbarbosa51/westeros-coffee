import { create } from "zustand";

interface Transaction {
    priceId: string
    quantity: number
    name: string
    price: number
}

export interface TransactionStore {
    transaction: Transaction[]
    addTransaction: (priceId: string, quantity: number, name:string, price: number) => void
    removeTransaction: (id: string) => void
}

export const useStore = create<TransactionStore>((set) => ({
    transaction: [],
    addTransaction: (priceId: string, quantity: number, name: string, price: number) => {
        set(state => {
            const rest = state.transaction.filter(t => t.priceId !== priceId)
            return {transaction: [...rest, {priceId: priceId, quantity: quantity, name: name, price: price} as Transaction]}
        })
    },
    removeTransaction: (id: string) => {
        set(state => ({
            transaction: state.transaction.filter(t => t.priceId !== id)
        }))
    },
    
}))
