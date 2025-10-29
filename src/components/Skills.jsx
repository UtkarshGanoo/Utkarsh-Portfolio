import React from "react";
import { SkillsDetails } from "../Constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sens bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Technical Skills
        </h2>
        <div className="w-2/3 h-1 bg-[#F0ECE2] mx-auto mt-2"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A summary of my technical background and proficiency developed through
          hands-on contributions, continuous learning, and diverse professional
          challenges.
        </p>
      </div>

      {/* skills category name   */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsDetails.map((category) => (
          <div
            key={category.title}
            className="bg-[#1C2B2D] backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
              {category.title}
            </h3>

            {/* skils name  */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 bg-transparent border-2 border-[#5c847d] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center "
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name}logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-[#EFFAD3]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
