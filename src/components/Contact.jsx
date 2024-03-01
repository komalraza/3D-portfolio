import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  // template_bjf4iey    service_opmrnya    XhJd8K5LGubNF_hkS
  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_opmrnya",
        "template_1814ikj",
        {
          from_name: form.name,
          to_name: "Komal Raza",
          from_email: form.email,
          to_email: "komalraza258@gmail.com",
          message: form.message,
        },
        "XhJd8K5LGubNF_hkS"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I'll get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert("Something went wrong. Please try again");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form
          action=""
          ref={formRef}
          onSubmit={onSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email Address"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Write us</span>
            <textarea
              rows={7}
              type="text"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tweet", "0.2", 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
