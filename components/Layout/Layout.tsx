import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setTheme] = useState("light");
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // Get stored theme.
    // Initially there is no theme in storage so storedTheme will be null.
    const storedTheme = localStorage.getItem("theme");

    // Check if theme has been stored and if it is the first load.
    // If the theme has been stored in local storage and hasLoaded is false -> Then make the theme from localstorage as the currentTheme.
    if (hasLoaded === false && storedTheme) {
      setLoaded(true);
      setTheme(storedTheme);
    }

    // If currentTheme is updated, update LocalStorage.
    if (currentTheme !== storedTheme && hasLoaded) {
      localStorage.setItem("theme", currentTheme);
    }

    // Set Loaded = true after first run
    setLoaded(true);
  }, [currentTheme]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png"></link>
        <meta name="theme-color" content="#111827" />
      </Head>
      <div
        className={[
          currentTheme === "dark" ? "dark" : "",
          "w-full flex flex-col",
        ].join(" ")}
      >
        <Navbar
          handleThemeToggle={() => {
            currentTheme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          hasDarkModeEnabled={currentTheme === "dark"}
        />
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-out">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
