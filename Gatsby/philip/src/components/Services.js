import React from "react"
import Title from "./Title"
import associations from "../constants/services"
const Associations = () => {
  return (
    <section className="section bg-grey">
      <Title title="Associations" />
      <div className="section-center services-center">
        {associations.map(associations => {
          const { id, icon, title, text } = associations
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
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
