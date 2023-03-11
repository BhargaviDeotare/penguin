import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#bae6fd] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>We offer</span>
        <span>
          <b>Functional Testing</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="api" title=" Mobile App Testing" />
        <Feature icon="ui" title="UI/UX Testing" />
        <Feature icon="ct" title="Compatibility Testing" />
        <Feature icon="AT" title="Accessibility Testing" />
      </div>
    </div>
  );
}

export default Experience;
