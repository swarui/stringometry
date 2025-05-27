import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md h-20 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo.avif" alt="Logo" width={250} height={250} />
      </div>

      {/*Links */}
      <div  className="flex text-black items-center gap-8 text-lg font-medium font-futura">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          For Sale
        </a>
        <a href="#" className="hover:text-blue-600">
          Art
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      {/*Icons */}
      <div className="flex  text-black items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-blue-600" />
        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
      </div>
    </nav>
  );
}

export default Navbar;
