import { useState } from "react";
import { BASE_URL } from "../config/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      className="p-10 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Get In Touch
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            <p>
               Email:
              <a
                href="mailto:dommaraju.jeevana@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 ml-2 hover:underline"
              >
                dommaraju.jeevana@gmail.com
              </a>
            </p>

            <p>
               GitHub:
              <a
                href="https://github.com/DommarajuJeevana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 ml-2"
              >
                github.com/DommarajuJeevana
              </a>
            </p>

            <p>
               LinkedIn:
              <a
                href="https://www.linkedin.com/in/dommaraju-jeevana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 ml-2"
              >
                linkedin.com/in/dommaraju-jeevana
              </a>
            </p>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 h-40"
          />

          <button
            type="submit"
            className="bg-cyan-400 text-black py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;