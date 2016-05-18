import React from 'react'

const ListItem = (props) =>(
  <li>
    <span className="title">
      {props.type}
    </span>
    {props.info.map((x, i) =>(
      <p key={i}> - {x}</p>
    ))}
  </li>
);



const SkillsList = (props) =>(
  <div id="skills-list" className="col-md-7">
    <h2>Skills</h2>
    <ul className="nice-list">
      <ListItem
        type="Basic Web Development"
        info={['Html - Css', 'Javascript - jQuery']}
      />
      <ListItem
        type="Css"
        info={['Sass', 'Bootstrap, Skeleton']}
      />
      <ListItem
        type="Node Js"
        info={['Express, Handlebars, Ejs, Express-React-Views']}
      />
      <ListItem
        type="Frameworks - Libraries"
        info={['Angular, React']}
      />
      <ListItem
        type="Build Tools - Task Runners"
        info={['Gulp, Webpack']}
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

export default SkillsList;