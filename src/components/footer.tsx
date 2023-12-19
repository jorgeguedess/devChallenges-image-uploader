import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center font-footer text-xs font-medium text-[#a9a9a9] sm:text-sm">
      created by{" "}
      <Link
        href="https://github.com/jorgeguedess"
        target="_blank"
        className="font-bold underline outline-none transition-colors hover:text-primary-blue focus:text-primary-blue"
      >
        Jorge Guedes
      </Link>{" "}
      - devChallenges.io
    </footer>
  );
};

export default Footer;
