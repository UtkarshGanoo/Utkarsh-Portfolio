import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  let [isOpen, setisOpen] = useState(false);
  let [isScroll, setisScroll] = useState(false);
  let [activeSection, setactiveSection] = useState("");
  let MenuItemclick = (sectionId) => {
    setactiveSection(sectionId);
    setisOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView();
    }
  };
  useEffect(() => {
    let handleScroll = () => {
      setisScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setisOpen(false); // Close mobile menu when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const MenuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScroll ? "bg-[#b4b4b5] bg-opacity-50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="text-black py-5 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-[#F5AD18] font-extrabold ">𝒰𝓉𝓀𝒶𝓇𝓈𝒽 </span>
          <span className="text-[#F5AD18] font-extrabold ">𝒢𝒶𝓃𝑜𝑜</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-black">
          {MenuItems.map((Items) => (
            <li
              key={Items.id}
              className={`cursor-pointer hover:text-white ${activeSection === Items.id ? "text-white" : ""}`}
            >
              <button onClick={() => MenuItemclick(Items.id)}>
                {Items.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/UtkarshGanoo?tab=overview&from=2023-12-01&to=2023-12-31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white"
          >
            <TfiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/utkarsh-ganoo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white"
          >
            <TfiLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/utkarsh__ganoo27?igsh=aTd5eXk1NG02NDJ4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white"
          >
            <AiFillInstagram size={28} />
          </a>
          <a
            href="https://x.com/UtkarshGan30965?t=8UgbKth-2sMKp6b6GMeplg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white"
          >
            <TiSocialTwitter size={30} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-black cursor-pointer"
              onClick={() => setisOpen(false)}
            />
          ) : (
            <TiThMenu
              className="text-3xl text-black cursor-pointer"
              onClick={() => setisOpen(true)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#030303] bg-opacity-70 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-black">
            {MenuItems.map((items) => (
              <li key={items.id}>
                <button
                  onClick={() => MenuItemclick(items.id)}
                  className={`cursor-pointer transition-colors duration-200 ${
                    activeSection === items.id
                      ? "text-[#FEB21A]"
                      : "text-white hover:text-[#FEB21A] "
                  }`}
                >
                  {items.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/UtkarshGanoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FEB21A]"
              >
                <TfiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh-ganoo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FEB21A]"
              >
                <TfiLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/utkarsh__ganoo27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FEB21A] "
              >
                <AiFillInstagram size={28} />
              </a>
              <a
                href="https://x.com/UtkarshGan30965"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FEB21A]"
              >
                <TiSocialTwitter size={30} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export const BlurBlow = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-[#A0E9FF] rounded-full opacity-40 blur-3xl animate-blob"></div>
    </div>
  );
};

BlurBlow.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};
