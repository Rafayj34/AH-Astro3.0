"use client";

import { useState,useEffect } from "react";
import { menu, close, arrowUp, arrowdown, logowhite } from "@/public";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [liActive, setLiActive] = useState("");
  const [subLiActive, setSubLiActive] = useState("");
  const [sidebarLiActive, setSidebarLiActive] = useState("");
  const [sidebarSubLiActive, setSidebarSubLiActive] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 1024) {
        setSidebarToggle(false);
      }
      else if (window.outerWidth <= 1023){
        setLiActive("")
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 


  const handleMouseClickLi = (link) => () => {
    // e.stopPropogation();
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
    <div className="w-screen z-40 text-black fixed ">
        <div className="flex justify-between lg:justify-center items-center h-[80px] whitespace-nowrap sm:px-16 md:px-20 lg:px-24 xl:px-32 bg-primary">
          <div className="flex px-5">
            <Link href="/">
              {" "}
              <Image height={60} width={60} alt="Go to home" src={logowhite} />
            </Link>
            <ul className=" hidden lg:flex  gap-10 lg:gap-12  px-20 items-center ">
              {navLinks.map((link) => (
                <li
                  className="flex cursor-default  text-white relative "
                  key={link.title}
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
                      height={15}
                      width={15}
                      alt="navbar dropdown arrow"
                      className={`ml-2 transition-transform transform ${
                        liActive === link.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:hidden flex mt-2 z-30 mr-10 ">
            <Image
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>
        </div>
   
        <div
        className={`dropdown flex justify-center duration-300 text-white w-screen bg-gradient-to-b from-primary from-30% to-purple-900
         transition-all ease-in-out 
        ${
            liActive === "Services" || liActive === "Universities" ? "dropdown-enter" : "dropdown-exit"
        }`}
      >
        {navLinks.map((link) =>
          Array.isArray(link.dropdown) &&
          link.dropdown.length > 0 &&
          link.title === liActive ? (
              <ul key={link.title} className="flex flex-col">
                {link.dropdown.map((subLink) => (
                  <li
                    key={subLink.title}
                    className={`p-2 pr-20 flex justify-between group hover:bg-white/10 transition-all duration-300 rounded-md ${subLink.title === subLiActive ? "bg-white/10" : ""}`}
                    onMouseEnter={() => setSubLiActive(subLink.title)}
                  >
                    {subLink.href ? (
                      <Link href={subLink.href} className="whitespace-nowrap">{subLink.title}</Link>
                    ) : (
                      subLink.title
                    )}
                    {subLink.subdropdown && (
                      <Image
                        src={arrowdown}
                        height={10}
                        width={10}
                        className={`transition-all -rotate-90 duration-700 opacity-0 group-hover:opacity-100
                        ${subLiActive === subLink.title ? "translate-x-10 opacity-100" : ""}`}
                        alt="navbar dropdown arrow"
                      />
                    )}
                  </li>
                ))}
              </ul>
          ) : null
        )}
        <div className= {`ml-8 pl-8 ${liActive === "Services" || liActive === "Universities" ? "border-l-[1px] border-white/10" : ""}  lg:w-[1000px]`}>
          <ul className="grid grid-cols-3 gap-x-3  ">
            {navLinks.map((link) =>
              Array.isArray(link.dropdown) &&
              link.dropdown.length > 0 &&
              link.title === liActive
                ? link.dropdown.map((subLink) =>
                    Array.isArray(subLink.subdropdown) &&
                    subLink.subdropdown.length > 0
                      ? subLink.subdropdown.map(
                          (subSubLink) => {
                            
                          return(
                            subLink.title === subLiActive &&
                            subLink.subdropdown && (
                              <Link key={subSubLink.title} href={subSubLink.href} className=" w-fit">
                                <li
                                  onClick={handleMouseClickLowerDiv("")}
                                  className={`p-2 hover:text-orange-600 transition-all w-fit`}
                                >
                                  {subSubLink.title}
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
        } p-6 bg-slate-700 text-slate-200  right-0 top-0 h-full w-full fixed z-40 transition-all`}
      >
        {/* Close Button inside Sidebar */}
        <div className="relative flex justify-between pt-2">
          <h2 className="px-3 text-2xl">BESTESSAYWRITER</h2>
          <Image
            src={close}
            alt="Close menu"
            width={28}
            height={28}
            className=" object-contain cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
        </div>
        <div className="items-center flex flex-col px-4 h-[84%] overflow-y-scroll overflow-hidden">
          <ul className="list-none mt-10 flex flex-col w-full">
            {navLinks.map((link) => (
              <li key={link.title} className={`py-1 cursor-pointer w-full `}>
                {/* link.href goes here */}
                <Link
                  href="#"
                  className="flex justify-between bg-slate-600  rounded-sm"
               
                >
                  <p className="py-1 px-2">{link.title}</p>
                  {link.dropdown && (
                    <div className="px-2 flex justify-center items-center rounded-r-sm bg-slate-800"    
                    onClick={() =>
                      setSidebarLiActive((prev) =>
                        prev === link.title ? "" : link.title
                      )
                    }>
                      <Image
                        className="transition-all"
                        alt="Arrow image for dropdown"
                        src={
                          sidebarLiActive === link.title ? arrowUp : arrowdown
                        }
                        height={16}
                        width={16}
                      />{" "}
                    </div>
                  )}
                </Link>
                {link.dropdown && sidebarLiActive === link.title && (
                  <div className={`sidebar-dropdown ${sidebarLiActive === link.title ? "sidebar-dropdown-enter": "sidebar-dropdown-exit"} transition-all ease-in-out duration-300`}>
                  <ul className="list-none mt-4 flex flex-col">
                    {link.dropdown.map((subLink) => (
                      <li key={subLink.title} className="py-1 mx-2  cursor-pointer">
                        <Link
                          className={`flex justify-between bg-slate-900  rounded-sm `}
                          href="#"
                        >
                          <p className="py-[2px] px-2">{subLink.title}</p>
                          {subLink.subdropdown && (
                            <div className="px-2 flex justify-center items-center rounded-r-sm bg-slate-800"
                            onClick={() =>
                              setSidebarSubLiActive((prev) =>
                                prev === subLink.title ? "" : subLink.title
                              )
                            }
                            >
                              <Image
                                className="transition-all"
                                alt="Arrow image for dropdown"
                                src={
                                  sidebarSubLiActive === subLink.title
                                    ? arrowUp
                                    : arrowdown
                                }
                                height={15}
                                width={15}
                              />
                            </div>
                          )}
                        </Link>
                        {subLink.subdropdown &&
                          sidebarSubLiActive === subLink.title && (
                            <ul className="list-none mt-4 flex flex-col ">
                              {subLink.subdropdown.map(
                                (nestedSubLink) => (
                                  <li key={nestedSubLink.title} className="py-1 ms-6">
                                    {nestedSubLink.title}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                  </div>
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