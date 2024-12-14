'use client'
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '@/app/utils/motion';
import { TypingText } from '../CustomTexts';
export default function FormContactUs() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "3031b36d-e41f-46d3-be65-1b7f400fe2ad");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        form.reset();
    }
    return (
        <div className="flex flex-wrap justify-between items-center h-auto px-5 mt-5">
            <motion.div
                variants={staggerContainer(0.25, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="innerWidth mx-auto flex lg:flex-row flex-col gap-6"
            >
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="relative"
                >
                    <div className="min-w-[370px] md:min-w-[400px]">
                        <form className="space-y-4 min-w-[370px] bg-primary-black p-8 rounded-2xl md:min-w-[500px] flex flex-col justify-between" onSubmit={handleSubmit}>
                            <div>
                                <input type="text" required id="fullName" name="fullName" placeholder='Full Name' className="mt-1 p-4 w-full outline-none rounded-md text-white" />
                            </div>
                            <div>
                                <input type="email" required id="email" name="email" placeholder='Email' className="mt-1 p-4 w-full rounded-md text-white  outline-none" />
                            </div>
                            <div>
                                <textarea id="message" required name="message" placeholder='Message' className="mt-1 p-4 w-full outline-none rounded-md text-white  "></textarea>
                            </div>
                            <div className="flex mx-auto bg flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-10 w-full">
                                <button title='send' type="submit" className="w-full flex justify-center items-center h-10 rounded-xl shadow hover:shadow-[#A9485C] bg-gradient-to-r  via-[#1A232E]  from-[#A9485C] border-transparent text-white font-bold hover:transform hover:scale-110 duration-500 cursor-pointer text-sm mx-auto">
                                    <TypingText title="Send Now" textStyles="text-start" />
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
