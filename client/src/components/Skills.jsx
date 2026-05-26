import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data.skills))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="skills" className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-cyan-400">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="bg-gray-800 px-5 py-3 rounded-lg"
          >
            <h3 className="font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;