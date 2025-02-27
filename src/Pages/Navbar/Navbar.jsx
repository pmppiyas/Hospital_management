import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 text-xl">
      {/* Logo */}
      <div>
        <h2>Johura.Ms</h2>
      </div>
      {/* Navmenu */}
      <nav>
        <ul className="flex gap-8 ">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* Button */}
      <div>
        <h4>Call a Doctor</h4>
      </div>
    </div>
  );
}

export default Navbar;
