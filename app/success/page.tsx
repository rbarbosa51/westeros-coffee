export default function Success() {
  return (
    <div>
      <h1 className="text-primary text-center text-3xl lg:text-4xl">
        Thank You!!!
      </h1>
      <div className="mt-4 lg:mt-8">
        <img
          src="/success.jpeg"
          alt="Success Image"
          className="lg:w-128 mx-auto"
        />
      </div>
      <p className="text-xl lg:text-2xl text-center mt-4 lg:mt-8">
        You have successfully purchased our coffee!!!{" "}
      </p>
      <p className="text-xl lg:text-2xl text-center mt-4 lg:mt-8">
        Your order should arrive shortly{" "}
      </p>
    </div>
  );
}
