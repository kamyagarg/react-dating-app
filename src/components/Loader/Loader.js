import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./Loader.css";

const Loader = ({isLoading}) => {
  return (
    <div className="flex loader-body flex-direction-column justify-content-center align-items-center">
      <div className="loader-text">
        <TypewriterComponent
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) =>
            typewriter
              .typeString("Start something epic.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Find people near you!")
              .pauseFor(1000)
              .start()
          }
        />
      </div>
      <button className="loader-button cursor-pointer" onClick={()=>isLoading(false)}>Get Started</button>
    </div>
  );
};

export default Loader;
