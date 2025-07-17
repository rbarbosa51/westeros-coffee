export default function CancelPage() {
  return (
    <div>
      <h1 className="text-primary text-center text-3xl lg:text-4xl">
        Something went wrong.
      </h1>
      <div className="mt-4 lg:mt-8">
        <img
          src="/cancel.jpeg"
          alt="Cancel Image"
          className="lg:w-128 mx-auto"
        />
      </div>
      <p className="text-xl lg:text-2xl text-center mt-4 lg:mt-8">
        There was a problem with your transaction.{" "}
      </p>
    </div>
  );
}
