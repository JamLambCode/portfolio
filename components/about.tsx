"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}>
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-5">
        Born in Arizona. <span className="">Degreeless</span>.{" "}
        <span className="">Unemployed</span>. Five years old. What will I do
        with my life? <br /> Play
        <span className=" font-semibold"> soooo much Roblox</span>, which
        apparently was the perfect pipeline to Software Development!
      </p>
      <p className="mb-5">
        From a young age I have always been obsessed with making stuff that&apos;s
        simply put, <span className="underline">fricken awesome</span>. I&apos;d draw the coolest dragons and build huge
        castles run by mean emperors to be overthrown. As I grew up, I began to
        realize that our world is much more intricate, yet strangely similar in
        many ways. That&apos;s when I dove headfirst into Philosophy – a passion I&apos;m
        pursuing at NYU – to gain deeper insights into my relationship with
        power in this world. And let me tell you, it&apos;s both fascinating and a
        bit frightening.
      </p>
      <p>
        Fortunately, I know that there&apos;s something I can do about it, and it
        involves revisiting what initially ignited my imagination –{" "}
        <span className=" font-bold text-lg">Software</span>.
      </p>
    </motion.section>
  );
}
