import React from 'react'
import "./List_of_project.css"

const List_of_project = (props) => {
  return (
    <li className="list-of-project">
        <div className="img-container">
          <img src={props.img}  />
        </div>
        <div className="project-info">
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
          <div>
            <button className="project-btn">Know more</button>
            <button className="project-btn">Live Page</button>
          </div>
        </div>
    </li>
  )
}

export default List_of_project