import React, { useState } from "react";
import { projects } from "../Constants";

export default function Work() {
  let [selectProject, setselectProject] = useState(null);
  let openModel = (project) => {
    setselectProject(project);
  };
  let closeModel = (project) => {
    setselectProject(null);
  };
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]  font-sens relative"
    >
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold text-black">Projects</h2>
        <div className="bg-white w-32 h-1  mx-auto mt-4"></div>
        <p className="text-white mt-4 text-lg font-semibold">
          A collection of my projects that reflect my creativity, technical
          expertise, and hands-on experience in building modern, user-focused
          web applications.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <div
            className="border border-black bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[#E7D3D3] hover:-translate-y-2 transition-transform duration-300"
            key={project.id}
            onClick={() => openModel(project)}
          >
            <div className="p-4 ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-white mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#7A85C1] text-xs font-semibold text-white rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-300 bg-opacity-90 p-4">
          <div className="bg-[#7A7A73] rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={closeModel}
                className="text-white text-3xl font-bold hover:text-black"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#7A7A73] px-4">
                <img
                  src={selectProject.image}
                  alt={selectProject.title}
                  className="lg:w-full w-[95%]  rounded-xl object-contain shadow-2xl  "
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-black mb-4 text-md">
                  {selectProject.title}
                </h3>
                <p className="text-white mb-6 lg:text-base text-xs">
                  {selectProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" bg-[#1A2A80] text-xs font-semibold text-white rounded-full px-2 py-1 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 ">
                  <a
                    href={selectProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:text-black hover:bg-[#C5B0CD] text-white lg:px-6 lg-py-2 px-2  py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:text-black hover:bg-[#C5B0CD] text-white lg:px-6 lg-py-2 px-2  py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
