import Logo from "../Logo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import GridBackground from "../common/GridBackground";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <GridBackground />

      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-32">
          <Logo className="text-indigo-500" />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Rødseth Consulting
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-white flex justify-center items-center space-x-2 group hover:cursor-pointer"
            >
              <span>Ta kontakt</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
            </a>
          </div>
        </div>
        {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                  src="https://illustrations.popsy.co/purple/product-launch.svg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default Hero;
