import React from "react";
import "../../styles/css/custom.css";

import Jumbotron from "../../assets/images/JumbotronImg-TW.jpg";

export default function Home() {
  return (
    <div>
      <div className="center jumbotron__container m-3">
        <img
          className="image__style"
          src={Jumbotron}
          height="350px"
          width="1000px"
          alt="jumbotron"
        />
      </div>
    </div>
  );
}
