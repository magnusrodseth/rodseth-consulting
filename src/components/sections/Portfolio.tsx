import type { CollectionEntry } from "astro:content";
import {
  ArrowDownIcon,
  ChevronRightIcon,
  CloudyIcon,
  CogIcon,
  FingerprintIcon,
  LockIcon,
  ServerIcon,
} from "lucide-react";

const secondaryFeatures = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudyIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowDownIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerprintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: CogIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

type PortfolioProps = {
  portfolio: CollectionEntry<"portfolio">[];
};

const Portfolio = ({ portfolio }: PortfolioProps) => {
  return (
    <div className="mt-32 sm:mt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Portefølje
          </h2>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {portfolio.map(({ data }) => (
            <div key={data.title} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <ChevronRightIcon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {data.title}.
              </dt>{" "}
              <dd className="inline">
                {data.description}{" "}
                {data.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
                  >
                    Se mer.
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Portfolio;
