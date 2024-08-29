import React, { useState } from "react";
import Title from "../components/Title";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [servicesData, setServicesData] = useState({
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo architecto voluptates amet vel natus, rerum iure eligendi quis suscipit porro ea nam, nihil recusandae in iste dolores perspiciatis sit.",
      },
      {
        icon: <FaHiking />,
        title: "endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo architecto voluptates amet vel natus, rerum iure eligendi quis suscipit porro ea nam, nihil recusandae in iste dolores perspiciatis sit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo architecto voluptates amet vel natus, rerum iure eligendi quis suscipit porro ea nam, nihil recusandae in iste dolores perspiciatis sit.",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo architecto voluptates amet vel natus, rerum iure eligendi quis suscipit porro ea nam, nihil recusandae in iste dolores perspiciatis sit.",
      },
    ],
  });
  return (
    <>
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {servicesData.services.map((e, index) => (
            <article key={index} className="service">
              <span>{e.icon}</span>
              <h6>{e.title}</h6>
              <p>{e.info}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
