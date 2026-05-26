function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Git",
    "GitHub"
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-8"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl text-center hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;