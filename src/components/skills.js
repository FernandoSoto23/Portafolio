import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {});
  return (
    <section id="skills" className="container skills">
      <div className="stack">
        <h2>Web Development</h2>
        <div className="stack-flex">
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-sass-original colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
        </div>
      </div>
      <div className="stack">
        <h2>Mobil Development</h2>
        <div className="stack-flex">
          <i class="devicon-react-original colored"></i>
          <img
            style={{ width: "7rem" }}
            src="https://www.svgrepo.com/show/353722/expo.svg"
            alt="expo"
          ></img>
        </div>
      </div>
      <div className="stack">
        <h2>Desktop development </h2>

        <div className="stack-flex">
          <i class="devicon-csharp-plain colored"></i>
          <i class="devicon-electron-original colored"></i>
        </div>
      </div>
      <div className="stack">
        <h2>Backend Development</h2>
        <div className="stack-flex">
          <i class="devicon-microsoftsqlserver-plain-wordmark colored"></i>
          <i class="devicon-mysql-original colored"></i>
          <i class="devicon-php-plain colored"></i>{" "}
          <i class="devicon-dotnetcore-plain colored"></i>{" "}
          <i class="devicon-express-original-wordmark"></i>
        </div>
      </div>
    </section>
  );
};
