import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="hero h-1/2 glass my-4 shadow-xl rounded-2xl">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-primary">
              Welcome to our Coffee Store
            </h1>
            <p className="py-6">
              You came to the right place. Enjoy the absolute best coffee
              Westeros has to offer. Our selection of award winning coffee
              products, will make you appreciate the distinction between our
              product and the rest.
            </p>
            <button className="btn btn-primary">
              <Link href={"/coffee"}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Awards */}
      <div className="card w-full glass shadow-xl image-full mb-4 lg:mb-8">
        <figure>
          <img src="/awards.jpeg" alt="Awards" className="aspect-square w-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl text-accent">Awards</h2>
          <p className="">Our coffee is recipient of multiple awards.</p>
          <p>Awards: </p>
          <ul className="">
            <li className="list-disc">Best Coffee Brand in Westeros</li>
            <li className="list-disc">
              Most Inovative Coffee Blend (Khaleesi Blend)
            </li>
            <li className="list-disc">
              Westeros 2023 Coffee Expo Flavor of the year (Kings Landing)
            </li>
            <li className="list-disc">Fastest Shipping in all of Westeros</li>
            <li className="list-disc">Best places to work (1st place)</li>
            <li className="list-disc">
              Most aromatic blend (Dragon With In flavor)
            </li>
            <li className="list-disc">
              Award for ethical treatment of dragons
            </li>
          </ul>
          <button className="btn btn-primary w-48 lg:w-64 mt-4 mx-auto">
            <Link href={"/coffee"}>Browse our collection</Link>
          </button>
        </div>
      </div>
      {/* Shipping */}
      <div className="card card-side w-full glass shadow-xl">
        <figure>
          <img
            src="/shipping.jpeg"
            alt="Shipping"
            className="aspect-square"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl lg:text-4xl text-accent">Shipping</h2>
          <p >
            We now provide expedited shipping via Dragon. You can now get your
            favorite coffee even faster.
          </p>
          <p><em><span className="text-accent">Warning:</span> By purchasing from us, you are indemnifying us from any damage caused by the Dragon during delivery. This includes the unlikely event that the delivery Dragon burns and eats your goats or kids.</em></p>
        </div>
      </div>
    </div>
  );
}
