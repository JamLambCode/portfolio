"use client"
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}
    id="about"
    ref = {ref}    
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat odio
        est quaerat placeat, eligendi quos accusantium! Ex ratione, illo hic
        pariatur ad neque dolorum esse? Asperiores nostrum saepe deserunt
        obcaecati nam quam repellat. Id maxime quis est eos? Cum explicabo
        soluta veritatis provident dicta quasi autem. Ratione in voluptatum
        officiis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero
        nostrum amet commodi tenetur! Hic consectetur, iure eum porro pariatur
        quos id veritatis, libero commodi culpa nihil, quisquam vero delectus?
      </p>
    </motion.section>
  );
}
