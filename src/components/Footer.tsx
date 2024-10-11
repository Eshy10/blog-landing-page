import Link from "next/link";
import Image from "next/image";
import { MENU_FOOTER } from "@/libs/data";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between p-4">
      <div className="flex flex-col md:w-2/5">
        <div className="relative w-24 h-12">
          <Image src={"/assets/images/boldo-logo-full.svg"} alt="logo" fill />
        </div>
        <p className="text-gray-600 mb-3 w-[70%]">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="text-gray-600">All rights reserved.</p>
      </div>
      <div className="flex flex-col md:flex-row md:w-3/5 justify-between mt-4 md:mt-0">
        {MENU_FOOTER.map((menu, index) => (
          <div key={index} className="flex flex-col mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-3">{menu.name}</h3>
            {menu.menu.map((subMenu, index) => (
              <Link
                href={subMenu.link}
                key={index}
                className={`text-gray-600 text-lg py-2 hover:text-blue-500 ${
                  subMenu.name === "Careers" ? "flex items-center" : ""
                }`}
              >
                {subMenu.name}
                {menu.tag && subMenu.name === "Careers" && (
                  <span className="flex items-center justify-center ml-2 px-2 py-1 rounded-full bg-green-400 text-gray-900 text-sm font-semibold">
                    Hiring
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
