export default function TeamPage() {
  return (
    <div>
      <h1 className="text-primary -mt-2 text-center text-3xl lg:text-4xl">
        Meet Our Team
      </h1>
      {/* CEO card */}
      {/* <h2 className="text-primary text-center text-xl lg:text-2xl mt-2">Meet our Officers</h2> */}
      <div className="card glass p-2 lg:p-4 mt-2 shadow-lg">
        <figure>
          <img alt="Our CEO" src="/OurCEO.jpeg" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-accent">Daenerys Targaryen</h2>
          <p>
            Daenerys Stormborn of House Targaryen, the First of Her Name, Queen
            of the Andals and the First Men, Protector of the Seven Kingdoms,
            the Mother of Dragons, the Khaleesi of the Great Grass Sea, the
            Unburnt, the Breaker of Chains.
          </p>
          <p className="font-bold">and now... CEO of Westeros Coffee!!!</p>
        </div>
      </div>
      {/* Our Team */}
      <div className="card glass lg:card-side p-2 lg:p-4 mt-4 shadow-lg">
        <figure>
          <img alt="Board Members" src="/BoardMembers.jpeg" className="rounded-xl " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-accent">Board Members</h2>
          <p>Daenerys Targaryen, Chief Executive Officer (center)</p>
          <p>Jon Snow, Chief Strategic Officer, Leader Division North (Left)</p>
          <p>
            Tyrion Lanister, Chief Financial Officer, Leader Division East
            (right)
          </p>
        </div>
      </div>
      {/* ll */}
      <div className="divider mt-2 w-[90%] mx-auto"></div>
      {/* Farmers */}
      <h2 className="text-primary text-center text-xl lg:text-2xl my-4">
        Compare our farming
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="card glass w-[45%] p-2 lg:p-4 shadow-lg">
          <figure>
            <img alt="Farmers" src="/farmers.jpeg" className="rounded-xl " />
          </figure>
          <div className="card-body">
            <p>
              Our coffee beans are the work of very happy farmers from all
              corners of Westeros.
            </p>
          </div>
        </div>
        <div className="divider divider-vertical lg:divider-horizontal ">
          Or
        </div>
        <div className="card glass w-[45%] p-2 lg:p-4 shadow-lg">
          <figure>
            <img alt="Ice Picking" src="/icepicking.jpeg" className="rounded-xl " />
          </figure>
          <div className="card-body">
            <p>
              Our rivals coffee beans are collected via ice zombies. The beans
              are infused with harmful white walker particles.
            </p>
          </div>
        </div>
      </div>
      <div className="divider mt-2 w-[90%] mx-auto"></div>
      {/* Brewing */}
      <h2 className="text-primary text-center text-xl lg:text-2xl my-4">
        Compare Our Process
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="card glass p-2 lg:p-4 w-[45%] shadow-lg">
          <figure>
            <img alt="Dragon" src="/dragon1.jpeg" className="rounded-xl " />
          </figure>
          <div className="card-body">
            <p>
              Our coffee is roasted with actual Dragon Fire. Dragon Fire ensures
              the highest quality.
            </p>
          </div>
        </div>
        <div className="divider divider-vertical lg:divider-horizontal ">
          Or
        </div>
        <div className="card glass w-[45%] p-2 lg:p-4 shadow-lg">
          <figure>
            <img alt="Night Coffee" src="/night_coffee.jpeg" className="rounded-xl " />
          </figure>
          <div className="card-body">
            <p>
              Our rivals coffee is brewed by ice zombies in very unsanitary
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
