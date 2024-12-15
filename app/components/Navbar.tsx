"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import SideMenu from "./sideBar";

const Navbar = () => (
  <header>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="innerWidth mx-auto flex justify-between gap-8">
        <Image
          src="/logo.png"
          width={70}
          height={50}
          alt="search"
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] pe-12 leading-[30.24px] text-white">
          CrossWalk
        </h2>
        <SideMenu />
      </div>
    </motion.nav>
  </header>
);

export default Navbar;
