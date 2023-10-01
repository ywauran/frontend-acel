import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const menus = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Alumni",
      link: "/alumni",
    },
    {
      name: "Galeri",
      link: "/gallery",
    },
    {
      name: "Tentang",
      link: "/about",
    },
  ];
  return (
    <header className="shadow absolute w-full top-0 left-0">
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link to="/">Aplikasi</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center space-x-4">
            {menus.map((item, index) => (
              <Link to={item.link}> {item.name}</Link>
            ))}
            {isLogin ? (
              <li>
                <details>
                  <summary>Masuk</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <button className="btn">Masuk</button>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
