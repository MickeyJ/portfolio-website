import React from 'react'

const ListItem = (props) =>(
  <li>
    <div className="title">
      <span className="title-text">{props.type}</span>
    </div>

    {props.info.map((x, i) =>(
      <p key={i}>{x}</p>
    ))}

  </li>
);


const SkillsList = (props) =>(
  <div>
    <h2>Skills</h2>
    <ul className="nice-list">
      <ListItem
        type="Basic Web Development"
        info={['Html5 - Css', 'Javascript - jQuery']}
      />
      <ListItem
        type="Javascript"
        info={['ES2015', 'OOP', 'FP']}
      />
      <ListItem
        type="Css"
        info={['Sass', 'Bootstrap']}
      />
      <ListItem
        type="Node Js"
        info={['FS', 'Express', 'Handlebars, Ejs, Express-React-Views']}
      />
      <ListItem
        type="Frameworks - Libraries"
        info={['Angular, React']}
      />
      <ListItem
        type="Task - Build Tools - Package Managers"
        info={['Gulp, Webpack', 'Browserify', 'Babel', 'Npm', 'Bower']}
      />
      <ListItem
        type="Database"
        info={['Postgres, Knex', 'MongoDB, Mongoose']}
      />
      <ListItem
        type="Deployment - Hosting"
        info={['AWS, S3, EC2', 'Heroku', 'GoDaddy']}
      />
    </ul>
  </div>
);

export default SkillsList
