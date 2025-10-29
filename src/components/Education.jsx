import React from "react";
import { education } from "../Constants";
export default function Education() {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black ">Education</h2>
        <div className="w-32 h-1 bg-white mx-auto mt-4"></div>
        <p className="text-white mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      <div className="relative">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"} `}
          >
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-[#F5DAA7] bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_#3C467B_0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 `}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={edu.img}
                    alt={edu.school}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-white">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-[#ECF4E8] mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-white font-bold ">Grade: {edu.grade}</p>
              <p className="mt-4 text-white ">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
