import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function NavLinks({ links, currentPath }) {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow flex-row items-center justify-center gap-2 bg-coconut p-3 font-medium text-blackBean hover:bg-peachPuff hover:text-licorice",
              {
                "bg-peachPuff text-licorice":
                  currentPath === link.href,
              },
            )}
          >
            <FontAwesomeIcon icon={link.icon} className="h-6" />
            <h2 className="hidden md:block">{link.name}</h2>
          </a>
        );
      })}
    </>
  );
}
