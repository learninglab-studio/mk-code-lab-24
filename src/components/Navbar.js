import React from 'react';

const Navbar = ({ title, links }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="text-lg font-bold">
        <a href="/" className="hover:text-gray-300">
          {title}
        </a>
      </div>
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="hover:text-gray-300">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
