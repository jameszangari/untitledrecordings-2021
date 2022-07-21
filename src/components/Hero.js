import React from "react";
import index from "@/json/index";
import LogoFull from "@/icons/logoFull";
import Logo from "@/icons/logo";
import Caret from "@/icons/caret";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <motion.section
        className="max-w-6xl mx-auto p-4 h-screen grid place-items-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        exit={{ opacity: 0 }}
      >
        <div>
          <LogoFull className="w-full hidden md:block" />
          <Logo className="w-full md:hidden block" />
          <div className="flex flex-col md:flex-row mt-8">
            <div className="h-[6px] w-full md:w-96 bg-gradient-to-r from-ur_purple to-ur_blue mt-[6px] mx-auto"></div>
            <p className="md:ml-4 ml-0 mt-4 md:mt-0">
              {index.meta.descriptionFull}
            </p>
          </div>
        </div>
      </motion.section>
      <Link href="/#artists" passHref>
        <a>
          <Caret className="cursor-pointer absolute bottom-10 mx-auto w-full" />
        </a>
      </Link>
    </>
  );
}

export default Hero;
