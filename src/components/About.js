import React from "react";

import { Me }  from "../images/";

function About() {
  return (
    <div>
      <div className="flex center">
        <img width="120" height="auto" style={{borderRadius: "100%", marginTop: "20px"}} src={Me} alt="Rodolphe Béjot"/>
      </div>
      <div style={{paddingTop: "20px", maxWidth: "225px", margin: "auto"}} className="flex">
        <a className="link flex-1 content-typo" href="https://twitter.com/rodolphe_bejot">_twitter</a>
        <a className="link flex-1 content-typo" href="https://github.com/rbejot">_github</a>
        <a className="link flex-1 content-typo" href="https://www.linkedin.com/in/rodolphe-bejot/">_linkedin</a>
      </div>
      <div className="card column">
        <div className="heading-typo big-typo-size bold">Bonjour !</div>
        <div className="content-typo normal-typo-size justify" style={{margin: "20px"}}>
          Je m'appelle <span className="bold">Rodolphe Béjot</span>, je suis
          aujourd'hui en fin d'études à l'<span className="bold">école 42</span>{" "}
          et <span className="bold">freelance</span>. J'ai intégré cette école
          il y'a bientôt 4 ans. J'ai fait des études d'arts et d'architecure, en plus
          d'avoir un fort bagage technique j'ai un réel goût pour le{" "}
          <span className="bold">design</span>. <br />
          <br />À côté du code je fais beaucoup de musiques et j'aimerais pouvoir
          m'améliorer en illustration et en 3D.
        </div>
      </div>
    </div>
  );
}

export default About;
