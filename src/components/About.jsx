import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assests/profile.jpg";

<TypeAnimation
  sequence={[
    "FullStack Developer",
    2000,
    "Java Backend Developer",
    2000,
    "MERNStack Developer",
    2000,
    "Java Developer",
    2000,
    "Coder",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>;

export default function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sens mt-7 md:mt-11 lg:mt-15"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8  md:mt-0">
          <h2 className="text-3xl sm:text-5xl md:6xl font-bold text-black mb-2 leading-tight ">
            Hey, i'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            UtkarshGanoo
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#FF9013] leading-tight">
            <span className="text-black">I Am a </span>
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "Backend Developer",
                2000,
                "FullStack Developer",
                2000,
                "MERN Developer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-[#FFF2E0] mb-10 mt-8 leading-relaxed">
            I am passionate Java and Full Stack Developer who loves transforming
            ideas into powerful, user-friendly web applications. Whether it’s
            crafting clean backend APIs with Spring Boot or building interactive
            UIs with React, I enjoy every step of the development journey. I
            believe in writing code that’s not only functional but also elegant
            and efficient. I’m always exploring new tools and frameworks to stay
            ahead of trends in technology — because for me, coding isn’t just
            work, it’s creativity in motion.
          </p>
          <a
            className="inline-block text-black py-3 px-8 rounded-full 
         mt-5 text-lg font-bold transition duration-300 transform:hover scale-105"
            href="https://drive.google.com/file/d/1n7bMZHFYrznrrzhfMUmssvcQKxJkMvt4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(90deg ,#F6C794,#FFF6B3)",
              boxShadow: "0 0 2px #F6C794 , 0 0 2px #F6C794,0 0 40px #F6C794",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* photo logic  */}

        <div className="md:w-1/2 flex justify-center md:justify- ml-4 md:ml-12">
          <img
            src={profileImage}
            alt="UTKARSH GANOO-PROFILE"
            className=" w-full h-full rounded-full object-cover drop-shadow-[0_8px_15px_#B9E5E8]"
          />
        </div>
      </div>
    </section>
  );
}
