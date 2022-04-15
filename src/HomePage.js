import { useState } from "react";
import React from "react";
import { ThemeContext } from "./Components/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function HomePage() {
  const [dogsImg, setDogsImg] = useState(null);
  const { theme, setTheme } = React.useContext(ThemeContext);

  function getDogPicture() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((result) => {
        setDogsImg(result.message);
      });
  }

  if (dogsImg == null) {
    return (
      <div className="absolute inset-0">
        <div className="h-screen dark:bg-neutral-800 justify-between flex flex-col absolute inset-0">
          <header className="bg-cyan-600 dark:bg-zinc-900 py-6 text-2xl dark:text-white text-center">
            <p>Welcome to Dogo Viewer</p>
          </header>
          <main className="flex-grow flex-col flex items-center justify-center">

            <div className="w-screen text-center ">
              <div className="border-2 h-80 w-80 mx-auto my-auto">
                <p className="my-32 h-full dark:text-white text-xl">
                  No dogo yet :(
                </p>
              </div>
            </div>
            <div className="text-center pt-9">
              <p className="dark:text-white">
                Click on the button to print a beautifull doggy on your screen
              </p>
              <button
                onClick={getDogPicture}
                className="bg-cyan-600 h-16 w-36 mt-8 rounded-md dark:text-white"
              >
                New dogs
              </button>
            </div>
          </main>
          <footer className="bg-cyan-600 dark:bg-zinc-900 h-16 justify-between flex items-center pl-5">
            {theme === "dark" ? (
              <FaSun
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="dark:text-white text-2xl cursor-pointer"
              />
            ) : (
              <FaMoon
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-black text-2xl cursor-pointer"
              />
            )}
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="absolute inset-0">
        <div className="h-screen dark:bg-neutral-800 justify-between flex flex-col absolute inset-0">
          <header className="bg-cyan-600 dark:bg-zinc-900 py-6 text-2xl dark:text-white text-center">
            <p>Welcome to Dogo Viewer</p>
          </header>
          <main className="flex-grow flex-col flex items-center justify-center">

            <div className="w-screen text-center ">
              <div className="border-2 h-80 w-80 mx-auto my-auto">
                <img src={dogsImg} id="dogs-picture" className="w-full h-full" />
              </div>
            </div>
            <div className="text-center pt-9">
              <p className="dark:text-white">
                Click on the button to print a beautifull doggy on your screen
              </p>
              <button
                onClick={getDogPicture}
                className="bg-cyan-600 h-16 w-36 mt-8 rounded-md dark:text-white"
              >
                New dogs
              </button>
            </div>
          </main>
          <footer className="bg-cyan-600 dark:bg-zinc-900 h-16 justify-between flex items-center pl-5">
            {theme === "dark" ? (
              <FaSun
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="dark:text-white text-2xl cursor-pointer"
              />
            ) : (
              <FaMoon
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-black text-2xl cursor-pointer"
              />
            )}
          </footer>
        </div>
      </div>
    );
  }
}

export default HomePage;



