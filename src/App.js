import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar";
import { motion, useScroll } from "framer-motion";
import React from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [variantCursor, setVariantCursor] = React.useState("default");
  const [cursorColor, setCursorColor] = React.useState("#FFD700");

  React.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
    social: {
      height: 70,
      width: 70,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
  };

  const textEnter = () => setVariantCursor("text");
  const socialEnter = () => setVariantCursor("social");

  const textLeave = () => setVariantCursor("default");

  return (
    <>
    
      <motion.div style={{ scaleX: scrollYProgress }}  className="progress-bar" />
      <motion.div
        animate={variantCursor}
        variants={variants}
        className={`cursor `}
        style={{ background: cursorColor }}
      />

      <Navbar
        setCursorColor={setCursorColor}
        textEnter={textEnter}
        textLeave={textLeave}
        socialEnter={socialEnter}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              textEnter={textEnter}
              textLeave={textLeave}
              socialEnter={socialEnter}
              setCursorColor={setCursorColor}
            />
          }
        />
        {/*  */}
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
