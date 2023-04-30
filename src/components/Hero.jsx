import React from "react";

import { logo } from "../assets";
import sumarizzer from "../assets/Sumarizzer.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={sumarizzer} alt="sumz_logo" className="w-28 object-contain" />

        <div className="buttons">
          <button
            type="button"
            onClick={() => window.open("https://github.com/gorcc", "_blank")}
            className="blue_btn"
          >
            GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open("https://www.buymeacoffee.com/gorcc", "_blank")
            }
            className="blue_btn m-5"
          >
            Buy me a Coffee
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summa<span className="blue_gradient">rizz</span>e Articles with{" "}
        <br
          className="max-md:hidden
        "
        />
        <span className="blue_gradient">Artificial Intelligence</span>
      </h1>
      <h2 className="desc">Shorter reading time, same article.</h2>
    </header>
  );
};

export default Hero;
