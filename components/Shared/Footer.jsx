import Link from "next/link";

import { Instagram, Github, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <div className="footer-container   flex justify-center pt-5 md:pt-4 pb-5 align-center h-20px  sm:pt-30 mt-10 border-t border-spacing-2 font-[Almarai]">
      <p className="icons">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mhuwimmel/"
          aria-label="My linkedin link"
        >
          <Linkedin className="text-xl font-bold text-cyan-600 hover:text-2xl hover:text-cyan-950" />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/mhuwaimel"
          aria-label="My Github link"
        >
          <Github className="text-2xl font-bold hover:text-3xl" />
        </Link>
        <Link
          target="_blank"
          href="http://instagram.com/mhuwaimel"
          aria-label="My instagram link"
        >
          <Instagram className="text-2xl text-amber-700 hover:text-rose-900 hover:text-3xl" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
