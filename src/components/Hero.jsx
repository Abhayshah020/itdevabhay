import { motion } from "framer-motion";

import { styles } from "../styles";
import image from "../assets/itdevabhay.jpg";
import LazyLoadedImage from "./LazyLoadImage";


const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              flexFlow: "wrap",
            }}
          >
            <LazyLoadedImage
              src={image}
              alt=""
              cssClass={"mian_hero_image_css"}
            />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I'm <span className="text-[#915EFF]">Abhay Shah</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className={`${styles.heroSubText} mt-2 tesxt-white-100`}
          >
            I develop{" "}
            <span className="text-[#915EFF]">
              AI chatbots, user interfaces, and web applications
            </span>
            <br className="sm:block hidden" />
            Create friendly conversational interfaces and
            <br className="sm:block hidden" />
            scale businesses online.
            <br className="sm:block hidden" />
            <br className="sm:block hidden" />
            Let's build your digital success together!
          </motion.p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
