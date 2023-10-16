import { TestimonialCard } from "@/components";

export default function TestimonialPage() {
  return (
    <div>
      <h1 className="text-primary -mt-2 text-center text-3xl lg:text-4xl">
        Testomonials
      </h1>
      <div className="flex flex-wrap gap-8 justify-center mt-4 lg:mt-8 ">
        <TestimonialCard
          title="Baby Yoda"
          image="/BabyYoda.jpeg"
          text="Yum Yum!!!"
          rating={"5 / 5"}
        />
        <TestimonialCard
          title="Gandalf"
          image="/Gandalf.jpeg"
          text="Excellent Coffee. The Khaleesi Blend was truly aromatic. You can sense the Dragon fire with each sip"
          rating={"4.8 / 5"}
        />
        <TestimonialCard
          title="Jason"
          image="/jason.jpeg"
          text='The Dragon with In flavor truly made my "job" handling teenagers easier. Slow shipping'
          rating={"3.9 / 5"}
        />
        <TestimonialCard
          title="Darth Vader"
          image="/vader.jpeg"
          text="In between running my galactic empire, I drink the Lannister Flavor to help me relax"
          rating={"4.1 / 5"}
        />
        <TestimonialCard
          title="American Psycho"
          image="/executive.jpeg"
          text="I feel like the Dothraki Flavor gives me an edge during board meetings!"
          rating={"4.7 / 5"}
        />
        <TestimonialCard
          title="Night King"
          image="/kight_king.jpeg"
          text="Overpriced coffee. Trash!!!"
          rating={"1 / 5"}
        />
      </div>
    </div>
  );
}
