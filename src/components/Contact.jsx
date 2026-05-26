function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-8"
    >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="flex flex-col gap-4 text-lg">

          <a
            href="mailto:dommaraju.jeevana@gmail.com"
            className="hover:text-gray-400 transition"
          >
            dommaraju.jeevana@gmail.com
          </a>

          <a
            href="https://github.com/DommarajuJeevana"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dommaraju-jeevana/"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;