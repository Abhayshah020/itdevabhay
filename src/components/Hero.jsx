import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import image from "../assets/itdevabhay.jpg";
import styled from "styled-components";
import { slideIn } from "../utils/motion";

const Image = styled.img`
  border-radius: 20% 50% 30% 50%;
  width: 150px;
  height: 150px;
  animation: identifier 10s linear infinite;

  @keyframes identifier {
    0% {
      border-radius: 20% 50% 30% 50%;
    }
    25% {
      border-radius: 70% 30% 60% 40%;
    }
    50% {
      border-radius: 30% 70% 50% 70%;
    }
    75% {
      border-radius: 50% 30% 70% 30%;
    }
    100% {
      border-radius: 20% 50% 30% 50%;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 450px) {
    width: 80px;
    height: 80px;
  }
`;

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
            <Image src={image} alt="" />
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
            animate={{ opacity: 1}}
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
