function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 sticky top-0">
      <h1 className="text-2xl font-bold text-cyan-400">
        Jeevana Portfolio
      </h1>

      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;