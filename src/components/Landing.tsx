import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PrimaryFeatures from "./sections/PrimaryFeatures";
import SecondaryFeatures from "./sections/SecondaryFeatures";
import Stats from "./sections/Stats";
import CallToAction from "./sections/CallToAction";

const Landing = () => {
  return (
    <div className="bg-gray-900">
      <main>
        <Hero />

        <PrimaryFeatures />

        <SecondaryFeatures />

        <Stats />

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
