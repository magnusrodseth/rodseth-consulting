import socials from "../../lib/socials";

const Socials = () => {
  return (
    <>
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          className="text-gray-500 hover:text-gray-400"
        >
          <span className="sr-only">{item.name}</span>

          {<item.icon />}
        </a>
      ))}
    </>
  );
};

export default Socials;
