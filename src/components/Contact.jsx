import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { notification } from "antd";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import insta_image from "../assets/instagram.png";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 20% 50% 30% 50%;
  width: 40px;
  height: 40px;
  animation: identifier 7s linear infinite;

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
`;
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form?.email && form?.name && form?.message) {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "JavaScript Mastery",
            from_email: form.email,
            to_email: "abhayshah020@gmail.com",
            instagram: form?.instagram || '',
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            // alert("Thank you. I will get back to you as soon as possible.");
            notification.success({
              message: "Contact Info Send",
              description:
                "Thank you. I will get back to you as soon as possible.",
              duration: 2,
            });
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            notification.error({
              message: "Failed to Send Contact Info",
              description: "Ahh, something went wrong. Please try again.",
              duration: 2,
            });
          }
        );
    } else {
      notification.info({
        message:
          "Please the Required * Form Field Before Sending Contact Info!",
        // description: "Ahh, something went wrong. Please try again.",
        duration: 2,
      });
      setLoading(false);
    }
  };

  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-[100%] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h5 className={styles.sectionSubText}>
          You Can DM me on My Instagram as Well
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#5095fa",
            }}
          >
            <Image src={insta_image} alt="" /> @itdevabhay
          </div>{" "}
        </h5>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name*</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your full name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email*</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email? We will contact your email as soon as possible!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your instagram (Optional)
            </span>
            <input
              type="instagram"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="What is your Instagram Id? We will DM you on Your Instagram as soon as possible!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message*</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message me about the Web Services You Need."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {/* 
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{display: "flex", textAlign: "center"}}
      >
        <div
        style={{display: "flex", alignItems: "center"}}
        >
        <img src={insta_image} alt="" style={{width:'70px', height:'70px'}}/>
        @itdevabhay
        </div>

      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
