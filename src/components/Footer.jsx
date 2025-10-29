import React from "react";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  let handleScroll = (sectionId) => {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-black py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx:auto text-center">
        <h2 className="text-xl font-semibold text-[#FBF3D1]">UTKARSH GANOO</h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skiils", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-white text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <TfiGithub />,
              link: "https://github.com/UtkarshGanoo?tab=overview&from=2023-12-01&to=2023-12-31",
            },
            {
              icon: <TfiLinkedin />,
              link: "hhttps://www.linkedin.com/in/utkarsh-ganoo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              icon: <SiCodechef size={20} />,
              link: "https://www.codechef.com/users/utkarshganoo",
            },
            {
              icon: <SiLeetcode />,
              link: "https://leetcode.com/u/utkarshganoo27/",
            },
            {
              icon: <TiSocialTwitter size={24} />,
              link: "https://x.com/UtkarshGan30965?t=8UgbKth-2sMKp6b6GMeplg&s=09",
            },
            {
              icon: <AiFillInstagram />,
              link: "https://www.instagram.com/utkarsh__ganoo27?igsh=aTd5eXk1NG02NDJ4",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-[#F5F1DC] mt-6">
          © UTKARSH GANOO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
