import React from "react"
import Title from "./Title"
import associations from "../constants/services"
const Associations = () => {
  return (
    <section className="section bg-grey">
      <div className="line"> </div>
      <Title title="Associations" />
      <div className="section-center services-center">
        {associations.map(associations => {
          const { id, icon, title, text, link } = associations
          return (
            <article key={id} className="service">
              {icon}
              <a href={link}>
                <h4>{title}</h4>
              </a>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Associations
