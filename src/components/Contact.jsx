import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  let form = useRef();
  let [, setisSent] = useState(false);

  let sendEmail = (e) => {
    e.preventDefault();
    //replace with your seviceid,templetid ,public key
    emailjs
      .sendForm(
        "service_rfyzgjf",
        "template_dy1cpc3",
        form.current,
        "sakDFblm80XdZfTvK"
      )
      .then(
        () => {
          setisSent(true);
          form.current.reset(); //by this rest field
          toast.success("E-mail Send successfully!🚀", {
            position: "top-center",
            autoclose: 3000,
            reverseOrder: "false",
            hideProgressBar: "true",
            closeonClick: "true",
            pauseOnHover: "true",
            draggable: "true",
            Theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message", error);
          toast.error("Failed To Send Message,Please Try Again!❌", {
            position: "top-center",
            autoclose: 3000,
            reverseOrder: "false",
            hideProgressBar: "true",
            closeonClick: "true",
            pauseOnHover: "true",
            draggable: "true",
            Theme: "dark",
          });
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <Toaster />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black ">Contact Me</h2>
        <div className="w-32 h-1 bg-white mx-auto mt-4"></div>
        <p className="text-white mt-4 text-lg font-semibold">
          Passionate about building a better world with great technology. I am
          actively seeking opportunities to connect and collaborate on
          innovative projects. Feel free to reach out.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#132440] p-6 rounded-lg shadow-lg border border-[#EEEEEE]">
        <h3 className="text-xl font font-semibold text-[#FFF7DD] text-center">
          Connect With Me💻
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your E-mail"
            required
            className="w-full p-3 rounded-md bg-[#000000] text-[#B7B89F] border border-[#C5C7BC] focus:outline-none focus:border-[#B77466]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
            className="w-full p-3 rounded-md bg-[#000000] text-[#B7B89F] border border-[#C5C7BC] focus:outline-none focus:border-[#B77466]"
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            required
            className="w-full p-3 rounded-md bg-[#000000] text-[#B7B89F] border border-[#C5C7BC] focus:outline-none focus:border-[#B77466]"
          />
          <textarea
            name="messsage"
            placeholder="Message"
            row="4"
            className="w-full p-3 rounded-md bg-[#000000] text-[#B7B89F] border border-[#C5C7BC] focus:outline-none focus:border-[#B77466]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F87B1B] to-[#E06B80] py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send📫
          </button>
        </form>
      </div>
    </section>
  );
}
