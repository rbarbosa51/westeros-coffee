import { useStore } from "@/app/(store)/store"
import { useState } from "react"
interface iProp {
    open?: boolean
    setOpen?: () => boolean
}

export default function CheckOutDrawer({open, setOpen}:iProp) {
    const {transaction} = useStore();
    console.log(transaction);
    return (
        <div className={`card ${open ? 'flex' : 'hidden'} h-96 w-96 absolute z-30 shadow-xl right-0 top-2 glass`}>
            <h2 className="card-title text-primary">Checkout</h2>
            <ul>
                {transaction && transaction.map((price, i) => (
                    <li key={i}>{price.name}</li>
                ))}
            </ul>
            <div className="card-actions">
                {/* @ts-ignore */}
                <button className="btn btn-primary" onClick={() => setOpen(prev => !prev)}>Click</button>
            </div>
        </div>
    )
}