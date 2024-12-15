"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {

    const [isOpen, setIsOpen] = useState(false);

    function handleClickOnClose(e: any) {
        if (e.target.classList.contains("close")) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOnClose);

        return () => {
            document.removeEventListener("click", handleClickOnClose);
        };
    }, []);

    return (
        <div className="z-50">
            <button title="Menu" type="button" onClick={() => setIsOpen(true)}>
                <CgMenuMotion
                    size={30}
                    color="white"
                    className="cursor-pointer"
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-black/50 close backdrop-blur-sm fixed top-0 right-0 w-screen min-h-screen transition-all duration-500 ease-in-out z-40"
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            // onMouseLeave={() => setIsOpen(false)}
                            transition={{ duration: 0.5 }}
                            className={`h-full overflow-hidden scrollbar-hide pb-4 bg-opacity-15 bg-primary-black rounded-l-[3rem] absolute top-0 right-0 min-w-[300px] transition-all duration-500 ease-out`}
                        >
                            <Link href="/" className="flex flex-col items-center justify-center">
                                <Image src={'/logo.png'} width={70} height={100} alt="logo" className="mx-auto mt-10 ps-2" />
                                <span className="font-bold font-mono text-2xl text-gray-300 mx-auto mt-4 ps-3">CrossWalk</span>
                            </Link>
                            <div className="flex dir-dynamic flex-col text-center gap-4 px-8 mt-10 min-w-[200px]">
                                <Link href={"/"} className="text-gray-300 font-bold text-2xl font-mono">
                                    Home
                                </Link>
                                <Link href={"/services"} className="text-gray-300 font-bold text-2xl font-mono">
                                    Services
                                </Link>
                                <Link href={"/about-us"} className="text-gray-300 font-bold text-2xl font-mono">
                                    About Us
                                </Link>
                                <Link href={"/contact-us"} className="text-gray-300 font-bold text-2xl font-mono">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
