function Projects() {

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built a full stack portfolio website using React, Node.js, and MongoDB.",
  },

  {
    title: "Air Quality Index Website",
    description:
      "Build a air quality index website using HTML and CSS.",
  },

];

  return (
    <section
      id="projects"
      className="bg-gray-100 py-20 px-8"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 justify-center">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition max-w-md mx-auto"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;