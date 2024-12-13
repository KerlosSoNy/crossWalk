"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Link from "next/link";

type InsightsCardProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
  link: string;
};

const InsightCard = ({ imgUrl, title, subtitle, index, link }: InsightsCardProps) => {
  console.log(link)
  return (
    <section>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 1)}
        className="flex md:flex-row flex-col gap-4"
      >
        <Image
          src={imgUrl}
          width={1000}
          height={250}
          alt="planet-01"
          priority={true}
          className="md:w-[270px] w-full rounded-[32px] object-cover"
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex-1 md:ml-[62px] flex flex-col max-w-[850px]">
            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
              {title}
            </h4>
            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full bg-transparent border-[1px] border-white">
            <Link
              href={`${link && link || '.'}`}
              target="_blank"
              className="z-[5000] w-[36%] h-[36%]"
            >
              <Image
                src="arrow.svg"
                width={1000}
                height={1000}
                alt="arrow"
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default InsightCard;
