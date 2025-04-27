"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { areaspracticeData } from "@/config/data";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbar = () => {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    };
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Services", slug: "/services" },
      { title: "Testimonials", slug: "/testimonials" },
      { title: "Location", slug: "/location" },
      { title: "Location", slug: "/location" },
      { title: "Contact", slug: "/contact" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const setPathSlug = areaspracticeData?.some(
    (el) => pathname === `/practice-areas/${el?.slug}`
  );

  return (
    <section className={"relative z-50 "}>
      <div className="bg-primary w-full navbar ">
        <div className="bg-white hidden md:block py-2 border-b-2">
          <div className="flex items-center container justify-between">
            <div className=" flex items-center gap-x-10 2xl:gap-x-16">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/main-logo.png"
                  alt="footer logo"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[120px] xl:w-[240px]  h-auto mt-3 mb-3"
                />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-stretch gap-x-2  xl:gap-x-5">
                {menuItems.map((el, index) => (
                  <Link
                    key={el.slug}
                    href={`${el.slug}`}
                    className={`cursor-pointer text-sm xl:text-[16px] text-black font-medium capitalize  bg-opacity-30 rounded-full  py-1 lg:py-2.5 px-2.5 lg:px-5 hover:bg-opacity-25 hover:bg-secondary ${pathname === el.slug ? " border bg-secondary" : ""} `}
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <div className="md:px-1 lg:px-1 xl:px-2">
                <Link
                  href={"/about"}
                  className="text-white font-normal text-lg bg-primary px-8 py-3 rounded-full hover:bg-green-700"
                >
                  Emergency Call
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0  md:pb-3 md:pt-4 bg-white`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/main-logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="w-[200px] h-auto"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-black"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
                  <Link
                    className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
