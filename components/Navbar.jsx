"use client";
import { useState } from "react";
import { logowhite, menu, close, arrowUp, arrowdown } from "../public";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [liActive, setLiActive] = useState("");
  const [subLiActive, setSubLiActive] = useState("");
  const [sidebarLiActive, setSidebarLiActive] = useState("");
  const [sidebarSubLiActive, setSidebarSubLiActive] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const handleMouseClickLi = (link) => () => {
    if (link.title === "Services") {
      setSubLiActive("Essay");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }

    if (link.title === "Universities") {
      setSubLiActive("Essays");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }
  };
  const handleMouseClickLowerDiv = (link) => () => {
    setLiActive("");
  };
  return (
    <div className=" w-screen z-40 text-black fixed ">
        <div className="flex justify-center items-center h-[80px] whitespace-nowrap sm:px-16 md:px-20 lg:px-24 xl:px-32 bg-primary">
          <div className="flex pl-10">
            <Link href="/">
              {" "}
              <Image height={60} width={60} alt="Go to home" src={logowhite} />
            </Link>
            <ul className=" hidden lg:flex  gap-10 lg:gap-12  px-20 items-center ">
              {navLinks.map((link, index) => (
                <li
                  className="flex cursor-default relative text-white"
                  key={index}
                  onClick={
                    link.dropdown
                      ? handleMouseClickLi(link)
                      : handleMouseClickLowerDiv("")
                  }
                >
                  {link.href ? (
                    <Link href={link.href}>{link.title}</Link>
                  ) : (
                    link.title
                  )}
                  {link.dropdown && (
                    <Image
                      src={arrowdown}
                      height={20}
                      width={15}
                      alt="navbar dropdown arrow"
                      className={`ml-2 transition-all  ${
                        liActive === link.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden flex mt-2 z-30 mr-16 ">
            <Image
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>
        </div>
      

      <div
        className={`dropdown flex justify-center duration-300 text-white w-screen bg-gradient-to-t from-purple-900 to-primary
         transition-all ease-in-out 
        ${
            liActive === "Services" || liActive === "Universities" ? "dropdown-enter" : "dropdown-exit"
        }`}
      >
        {navLinks.map((link) =>
          Array.isArray(link.dropdown) &&
          link.dropdown.length > 0 &&
          link.title === liActive ? (
            <>
              {/* <p className="pl-44 pt-10 text-orange-500 font-semibold ">{link.title}</p> */}

              <ul key={link.title} className="flex flex-col">
                {link.dropdown.map((sublink, index) => (
                  <li
                    key={index}
                    className={`p-2 pr-20 flex justify-between group hover:bg-white/10 transition-all duration-300 rounded-md ${sublink.title === subLiActive ? "bg-white/10" : ""}`}
                    onMouseEnter={() => setSubLiActive(sublink.title)}
                  >
                    {sublink.href ? (
                      <Link href={sublink.href}>{sublink.title}</Link>
                    ) : (
                      sublink.title
                    )}
                    {sublink.subdropdown && (
                      <Image
                        src={arrowdown}
                        width={10}
                        className={`transition-all -rotate-90 duration-500 opacity-0 group-hover:opacity-100
                        ${subLiActive === sublink.title ? "translate-x-10 opacity-100" : ""}`}
                        alt="navbar dropdown arrow"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : null
        )}
        <div className= {`ml-8 pl-8 ${liActive === "Services" || liActive === "Universities" ? "border-l-[1px] border-white/10" : ""}  w-[1300px]`}>
          <ul className="grid grid-cols-3 gap-x-3 content-list ">
            {navLinks.map((link) =>
              Array.isArray(link.dropdown) &&
              link.dropdown.length > 0 &&
              link.title === liActive
                ? link.dropdown.map((subLink) =>
                    Array.isArray(subLink.subdropdown) &&
                    subLink.subdropdown.length > 0
                      ? subLink.subdropdown.map(
                          (subsubLink, index) => {
                            
                          return(
                            subLink.title === subLiActive &&
                            subLink.subdropdown && (
                              <Link key={index} href={subsubLink.href} className=" w-fit">
                                <li
                                  onClick={handleMouseClickLowerDiv("")}
                                  className={`p-2 hover:text-secondary transition-all w-fit`}
                                >
                                  {subsubLink.title}
                                </li>
                              </Link>
                            ))
                            })
                      : null
                  )
                : null
            )}
          </ul>
        </div>
      </div>
      <div
        onClick={handleMouseClickLowerDiv("")}
        className={`bg-black/50 flex h-screen transition-opacity duration-300  ${
          liActive ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {" "}
      </div>

      <div
        className={`${
          sidebarToggle ? "sidebar-visible" : "sidebar-hidden"
        } p-6 bg-white text-slate-900  right-0 top-0 h-full w-full fixed z-40 transition-all`}
      >
        {/* Close Button inside Sidebar */}
        <div className="relative flex justify-end pt-[52px] right-6">
          <Image
            src={close}
            alt="Close menu"
            width={28}
            height={28}
            className=" object-contain cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
        </div>
        <div className="justify-start items-start flex flex-col h-[84%] overflow-y-scroll overflow-hidden">
          <ul className="list-none mt-10 flex flex-col ">
            {navLinks.map((link, index) => (
              <li key={index} className={`py-2 cursor-pointer`}>
                {/* link.href goes here */}
                <Link
                  href="#"
                  className="flex"
                  onClick={() =>
                    setSidebarLiActive((prev) =>
                      prev === link.title ? "" : link.title
                    )
                  }
                >
                  {link.title}{" "}
                  {link.dropdown && (
                    <div className="ml-2 transition-all mt-2 h-[11px] w-[11px]">
                      <Image
                        className="transition-all"
                        alt="Arrow image for dropdown"
                        src={
                          sidebarLiActive === link.title ? arrowUp : arrowdown
                        }
                        height={15}
                        width={20}
                      />{" "}
                    </div>
                  )}
                </Link>
                {link.dropdown && sidebarLiActive === link.title && (
                  <ul className="list-none mt-4 flex flex-col ">
                    {link.dropdown.map((subLink, index) => (
                      <li key={index} className="py-1 ms-3 cursor-pointer">
                        <Link
                          className="flex"
                          href="#"
                          onClick={() =>
                            setSidebarSubLiActive((prev) =>
                              prev === subLink.title ? "" : subLink.title
                            )
                          }
                        >
                          {subLink.title}{" "}
                          {subLink.subdropdown && (
                            <div className="ml-2 transition-all mt-2 h-[11px] w-[11px]">
                              <Image
                                className="transition-all"
                                alt="Arrow image for dropdown"
                                src={
                                  sidebarSubLiActive === subLink.title
                                    ? arrowUp
                                    : arrowdown
                                }
                                height={15}
                                width={20}
                              />{" "}
                            </div>
                          )}{" "}
                        </Link>
                        {subLink.subdropdown &&
                          sidebarSubLiActive === subLink.title && (
                            <ul className="list-none mt-4 flex flex-col ">
                              {subLink.subdropdown.map(
                                (nestedSubLink, index) => (
                                  <li key={index} className="py-1 ms-6">
                                    {nestedSubLink.title}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
