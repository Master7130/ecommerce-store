import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  const [theme, setTheme] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updateTheme = useCallback((newTheme: boolean) => {
    setTheme(newTheme);
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        ref.current.classList.add("dark");
        setTheme(true);
      } else ref.current.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      )
        ref.current.classList.add("dark");
      else ref.current.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="flex flex-row h-screen" ref={ref}>
      <Navbar theme={theme} setTheme={updateTheme} />
      {children}
    </main>
  );
}
