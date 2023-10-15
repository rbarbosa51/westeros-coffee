"use client"
import { useStore } from "@/app/(store)/store"

interface iProp {
    open?: boolean
    setOpen?: () => void
}

export default function CheckOutDrawer({open, setOpen}:iProp) {
    const {transaction} = useStore();
    
    const handleClick = () => {
        console.log(transaction)
        //@ts-ignore
        setOpen(prev => !prev)
    }
    return (
        <div className={`card ${open ? 'flex' : 'hidden'} min-h-96 w-96 absolute z-30 shadow-xl right-0 top-2 bg-base-200`}>
            <div className="flex justify-between w-[95%]">
                <h2 className="card-title text-primary text-3xl lg:text-4xl">Checkout</h2>
                <button className="btn btn-square w-4 aspect-square" onClick={handleClick}>X</button>
            </div>
            <table className="table table-zebra">
                <thead>
                    <tr className="text-left">
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {(transaction.length > 0) ? 
                        (
                            transaction.map((price, i) => (
                                <tr key={i} className={`font-bold text-left ${(i % 2 === 0) ? 'bg-base-300' : 'bg-base-200'}`}>
                                    <td>{price.name}</td>
                                    <td>{price.quantity}</td>
                                    <td>{(price.quantity * price.price / 100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
                                </tr>
                            ))
                        ) :
                        (
                            // <h1 className="text-2xl lg:text-3xl text-accent my-[10%] text-center">Cart is Empty</h1>
                            <tr className="text-accent text-2xl lg:text-3xl">
                                <td>Checkout</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            
            <div className="card-actions">
                {/* @ts-ignore */}
                <button className="btn btn-primary mb-2" onClick={handleClick}>Proceed to Checkout</button>
            </div>
        </div>
    )
}
