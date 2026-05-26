import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/projects`
        );

        const data = await response.json();

        console.log(data);

        setProjects(data.projects || []);
      } catch (error) {
        console.log("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="p-10 bg-black text-white"
    >
      {/* HEADING */}
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:scale-105 transition duration-300"
            >

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">

                {project.techStack &&
                  project.techStack.map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    )
                  )}

              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 flex-wrap">

                {/* GITHUB BUTTON */}
                <a
                  href={
                    project.githubLink
                      ? project.githubLink
                      : "https://github.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
                >
                  GitHub
                </a>

                {/* LIVE DEMO BUTTON */}
                <a
                  href={
                    project.liveLink &&
                    project.liveLink !== ""
                      ? project.liveLink
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No projects found.
          </p>
        )}

      </div>
    </section>
  );
}

export default Projects;