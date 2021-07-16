import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import Projects from "../src/components/Projects";
export default function Index() {
  const router = useRouter();
  const sectionRefs = useRef({
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
  });

  const [currentScroll, setCurrentScroll] = useState<[string, boolean]>([
    "home",
    false,
  ]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      Object.entries(sectionRefs.current).forEach(([key, value]) => {
        const rect = value.current?.getBoundingClientRect();
        if (rect && rect.top <= 0 && rect.bottom - rect.height <= 0) {
          setCurrentScroll([key, false]);
        }
      });
      console.log(
        sectionRefs.current.projects.current?.getBoundingClientRect()
      );
    });
  }, []);
  useEffect(() => {
    if (currentScroll[1]) {
      // @ts-ignore
      const section: RefObject<HTMLDivElement> | undefined =
        // @ts-ignore
        sectionRefs.current[currentScroll[0]];
      if (section) {
        section.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentScroll]);
  return (
    <>
      <NavBar
        currentScroll={currentScroll}
        setCurrentScroll={setCurrentScroll}
      />
      <div className="h-screen pt-16 bg-black" ref={sectionRefs.current.home}>
        <Home />
      </div>
      <div
        className="bg-white py-16 px-8 min-h-screen flex items-center"
        ref={sectionRefs.current.projects}
      >
        <Projects />
      </div>
    </>
  );
}
