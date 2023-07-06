import {
  CogIcon,
  DatabaseIcon,
  HeartHandshakeIcon,
  RocketIcon,
} from "lucide-react";

const expertises = [
  {
    name: "Moderne webapplikasjoner",
    description:
      "Bruk av bransjestandarder og robust teknologi for å sikre at din webapplikasjon fungerer sømløst, er skalerbar og klar for å møte fremtidige behov.",
    icon: RocketIcon,
  },
  {
    name: "Arkitektur og systemutvikling",
    description:
      "Evne til å se det store bildet ved å designe samhandling og kommunikasjon mellom dine ulike systemer og tjenester.",
    icon: DatabaseIcon,
  },
  {
    name: "Automatisering",
    description:
      "Din tid er verdifull. Ved å automatisere arbeidsprosessene dine har du muligheten til å fokusere på det du virkelig elsker å gjøre.",
    icon: CogIcon,
  },
  {
    name: "Rådgivning",
    description:
      "Kompetent rådgivning basert på erfaring i bransjen for å veilede deg gjennom komplekse teknologiske utfordringer. Vi tilbyr skreddersydd rådgivning som tar hensyn til dine spesifikke behov og mål.",
    icon: HeartHandshakeIcon,
  },
];

const Expertise = () => {
  return (
    <div
      className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
      id="expertise"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl before:">
          Ekspertise og tjenester
        </h2>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {expertises.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Expertise;
