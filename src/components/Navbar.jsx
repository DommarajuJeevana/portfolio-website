function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 bg-black text-white border-b border-gray-800">      
      <h1 className="text-2xl font-bold">
      Dommaraju Jeevana
      </h1>

      <ul className="flex gap-6 text-lg">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;