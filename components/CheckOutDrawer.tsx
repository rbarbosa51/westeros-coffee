// "use client"
import { useStore } from "@/app/(store)/store";

interface iProp {
  open?: boolean;
  setOpen?: () => void;
}

export default function CheckOutDrawer({ open, setOpen }: iProp) {
  const { transaction } = useStore();

  const handleClick = () => {
    //@ts-ignore
    setOpen((prev) => !prev);
  };
  const openStripe = async (e: any) => {
    e.preventDefault();
    const listItems = transaction.map((price) => ({
      price: price.priceId,
      quantity: price.quantity,
    }));

    const response = await fetch("/api/payment", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listItems),
    });
    const data = await response.json();
    window.location.assign(data);
    //@ts-ignore
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`card ${
        open ? "flex" : "hidden"
      } min-h-96 w-96 absolute z-30 shadow-xl right-0 top-2 bg-base-200`}
    >
      <div className="flex justify-between w-[95%]">
        <h2 className="card-title text-primary text-3xl lg:text-4xl">
          Checkout
        </h2>
        <button
          className="btn btn-square w-4 aspect-square"
          onClick={handleClick}
        >
          X
        </button>
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
          {transaction.length > 0 ? (
            transaction.map((price, i) => (
              <tr
                key={i}
                className={`font-bold text-left ${
                  i % 2 === 0 ? "bg-base-300" : "bg-base-200"
                }`}
              >
                <td>{price.name}</td>
                <td>{price.quantity}</td>
                <td>
                  {((price.quantity * price.price) / 100).toLocaleString(
                    "en-US",
                    { style: "currency", currency: "USD" },
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-accent text-2xl lg:text-3xl">
              <td>Cart is Empty.</td>
            </tr>
          )}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="card-actions">
        {/* @ts-ignore */}
        <button className="btn btn-primary mb-2" onClick={openStripe}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
