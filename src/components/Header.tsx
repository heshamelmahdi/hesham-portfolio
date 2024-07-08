import Link from "next/link";
import Socials from "./headerComponents/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 md:px-6 xl:px-0 xl:h-[90px] mt-20 md:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <div className="text-2xl">
              Hesham El-Mahdi<span className="text-accent">.</span>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};
export default Header;
