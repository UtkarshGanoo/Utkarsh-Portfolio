import React from "react";
import { experiences } from "../Constants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black ">Experience</h2>
        <div className="w-32 h-1 bg-white mx-auto mt-4"></div>
        <p className="text-white mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      <div className="relative">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"} `}
          >
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-[#F5DAA7] bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_#3C467B_0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 `}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={experience.img}
                    alt={experience.company}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-white">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-[#ECF4E8] mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-white">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white  ">skills:</h5>
                <ul className="flex mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#4FB7B3] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border-white "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
