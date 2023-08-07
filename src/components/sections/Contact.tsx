import { MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8"
      id="contact"
    >

      <div
        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex justify-center items-center space-x-4">
          <span>La oss ta en prat</span>
          <span className="animate-wiggle transition">👋🏼</span>
        </h2>

        <a
          href="mailto:magnus.rodseth@gmail.com"
          target="_blank"
          className="text-gray-400 hover:text-gray-300 flex justify-center items-center space-x-2 mt-8 transition-colors duration-200"
        >
          <MailIcon />
          <span>magnus.rodseth@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
