import React from 'react'

import ListItem from './ListItem'

const ProjectList = (props) =>(
  <div id="link-list-box">
    <ul className="nice-list">
      <ListItem
        title="Galvanize Pre-Challenge"
        github_url="https://github.com/MickeyJ/largest-phone-number"
        info="pre-challenge assessment for Galvanize Full Stack."
      />
      <ListItem
        title="Personal Project"
        img={['personal', 5]}
        github_url="https://github.com/MickeyJ/personal-project"
        demo_url="http://personal-project.herokuapp.com"
        info="Pre-course work for Galvanize. Express, Gulp, Sass, jQuery"
      />
      <ListItem
        title="React-Redux-JWT"
        img={['q3', 5]}
        github_url="https://github.com/MickeyJ/q3-react-starter"
        demo_url="https://easy-speak.herokuapp.com/"
        info="React, Redux, Webpack, Express, JWT, Postgres. Sign up or log in as Bob - Email: 'bob@mail.com' Password: 'asdf'"
      />
      <ListItem
        title="React-Redux-Webpack"
        img={['comments', 4]}
        github_url="https://github.com/MickeyJ/react-redux-crud"
        demo_url="https://comments-redux.herokuapp.com"
        info="React, Redux, Webpack, Express, Postgres"
      />
      <ListItem
        title="Angular-JWT"
        img={['reddit', 4]}
        github_url="https://github.com/MickeyJ/reddit-clone-angular-jwt"
        demo_url="https://mickey-reddit-clone.herokuapp.com"
        info="Angular, Webpack, JWT, Express, Postgres"
      />
      <ListItem
        title="Sass & Express-React-Views"
        img={['sass', 8]}
        github_url="https://github.com/MickeyJ/super-sass-modules"
        demo_url="https://sass-modules.herokuapp.com/"
        info="Express-React-Views, Gulp, Sass"
      />
      <ListItem
        title="NodeJS-Todos"
        img={['pubsub', 2]}
        github_url="https://github.com/MickeyJ/node-pubsub-todos"
        info="Command line todo app, pub-sub style"
      />
      <ListItem
        title="Angular-React"
        github_url="https://github.com/MickeyJ/Invoices-Angular-React-ES2015"
        info="Angular, React, Gulp, Connect"
      />
      <ListItem
        title="Spring-Thymeleaf-Starter"
        github_url="https://github.com/MickeyJ/spring-mvc-starter"
        info="Java Spring, Thymeleaf, Gulp, Sass"
      />
      <ListItem
        title="The Code for this Site"
        github_url="https://github.com/MickeyJ/portfolio-website"
        info="Using bits a pieces from the projects above. Hosted on AWS EC2."
      />
    </ul>
  </div>
);

export default ProjectList;