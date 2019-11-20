import React from "react";

import {
  Entoure,
  Monneasy,
  Pulse,
  Shoc
} from "../images/";

function Portfolio() {
  const Job = ({ name, website, date, image, children }) => (
    <div className="card flex">
      <div className="flex-1">
        <div className="heading-typo big-typo-size bold">
          <a href={website}>
            {name}
          </a>
        </div>
        <div className="content-typo little-typo-size">{date}</div>
        <div
          className="content-typo normal-typo-size justify"
          style={{ margin: "20px" }}
        >
          {children}
        </div>
      </div>
      <div className="flex-1 flex right">
        <a href={website} alt={name}>
          <img src={image} alt={name} />
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <Job
        name="Entoure"
        website="https://entoure-paris.com"
        image={Entoure}
        date="Juin 2019"
      >
        Site e-commerce réalisé sous <span className="bold">Wordpress</span>{" "}
        avec <span className="bold">WooCommerce</span>. Développement à partir de
        maquettes graphiques.
      </Job>
      <Job
        name="Pulse"
        website="https://use-pulse.com"
        image={Pulse}
        date="Avril 2019"
      >
        J'ai crée <span className="bold">Pulse</span>, un service permettant de
        booster les ventes de son e-commerce en montrant en temps réel
        l'activité de son site.
        <span className="bold"> PHP</span> pour le module prestashop et{" "}
        <span className="bold">Express </span>pour la partie back.
      </Job>
      <Job
        name="Monneasy"
        website="https://web.archive.org/web/20180805230148/http://monneasy.com/"
        image={Monneasy}
        date="Novembre 2017 - Mai 2018"
      >
        <span className="bold">Développeur Fullstack javascript</span>, j'ai participé à
        la conception du projet "from scratch".{" "}
        <span className="bold">React.js</span> en front pour le dashboard client
        et <span className="bold">Express.js</span> pour l'API.<br/><br/>
        <a className="bold link" href="https://www.dailymotion.com/video/x6ix8zj">Vidéo explicative</a>
      </Job>
      <Job
        name="Shoc"
        website="https://shoc-securite.fr"
        image={Shoc}
        date="Septembre 2016 - Mai 2017"
      >
        J'ai mis en place le site e-commerce de la marque sous <span className="bold">Prestashop</span>.
      </Job>
    </div>
  );
}

export default Portfolio;
