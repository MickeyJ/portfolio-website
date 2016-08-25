import React from 'react'

import ListItem from './ListItem'

const ProjectList = (props) =>(
  <div id="link-list-box">
    <h2>Projects</h2>
    <hr/>
    <ul className="nice-list">
      <ListItem
        title="Jackson Prince Website"
        img={['jpweb', 6]}
        github_url="https://github.com/MickeyJ/jackson-prince-website"
        demo_url="https://jp-web.herokuapp.com"
        info="Professional Audio Engineer website (in development). Includes client management application."
        tech="AWS S3, Express-React-Views, Gulp, React, Redux, Webpack"
      />
      <ListItem
        title="Easy Speak"
        img={['q3', 5]}
        github_url="https://github.com/MickeyJ/q3-react-starter"
        demo_url="https://easy-speak.herokuapp.com/"
        info="Augmentative and Alternative Communication app. Sign up or log in as Bob - Email: 'bob@mail.com' Password: 'asdf'"
        tech="React, Redux, Webpack, Express, JWT, Postgres"
      />
      <ListItem
        title="Redux Comments"
        img={['comments', 4]}
        github_url="https://github.com/MickeyJ/react-redux-crud"
        demo_url="https://comments-redux.herokuapp.com"
        info="Simple CRUD app"
        tech="React, Redux, Webpack, Express, Postgres"
      />
      <ListItem
        title="Reddit Clone"
        img={['reddit', 4]}
        github_url="https://github.com/MickeyJ/reddit-clone-angular-jwt"
        demo_url="https://mickey-reddit-clone.herokuapp.com"
        info="Reddit Clone with token authentication"
        tech="Angular, ES2015, Webpack, JWT, Express, Postgres"
      />
      <ListItem
        title="Tea Shop"
        img={['teashop', 4]}
        github_url="https://github.com/MickeyJ/angular-express-shopping"
        demo_url="https://ng-shop-app.herokuapp.com/"
        info="Practice CRUD app. Writing Angular 1.0 in a more modern/modular style."
        tech="Angular, ES2015, Gulp, Html-Inject, Sass, Bower, Bootstrap-Css"
      />
      <ListItem
        title="Frontify Menu System Clone"
        img={['menu', 6]}
        github_url="https://github.com/MickeyJ/menu-system-clone"
        demo_url="https://ux-homework.herokuapp.com/"
        info="Clone of the Frontify menu system, with improvements"
        tech="React, Webpack, Sass"
      />
      <ListItem
        title="Sass Modules"
        img={['sass', 8]}
        github_url="https://github.com/MickeyJ/super-sass-modules"
        demo_url="https://sass-modules.herokuapp.com/"
        info="Demonstrating the power of Sass and React"
        tech="Express-React-Views, Gulp, Sass"
      />
      <ListItem
        title="Personal School Project"
        img={['personal', 5]}
        github_url="https://github.com/MickeyJ/personal-project"
        demo_url="http://personal-project.herokuapp.com"
        info="Pre-course work for Galvanize."
        tech="Express, Gulp, Sass, jQuery"
      />
      <ListItem
        title="NodeJS-Todos"
        img={['pubsub', 2]}
        github_url="https://github.com/MickeyJ/node-pubsub-todos"
        info="Command line todo app, pub-sub style"
        tech="Nodejs, FS, JSON, CLI Colors"
      />
      <ListItem
        title="Angular-React Invoices"
        github_url="https://github.com/MickeyJ/Invoices-Angular-React-ES2015"
        info="Demonstrating how Angular and React can work together"
        tech="Angular, React, Gulp, Connect"
      />
      <ListItem
        title="Java Spring - Thymeleaf Starter"
        github_url="https://github.com/MickeyJ/spring-mvc-starter"
        info="Learning Java Spring MVC"
        tech="Java Spring, Thymeleaf, Gulp, Sass"
      />
      <ListItem
        title="Java Todos"
        github_url="https://github.com/MickeyJ/java-todo-app"
        info="Learning Java basics"
        tech="Java, JSON"
      />
      <ListItem
        title="The Code for this Site"
        github_url="https://github.com/MickeyJ/portfolio-website"
        info="My portfolio website code."
        tech="AWS EC2, Express-React-Views, Gulp, Sass."
      />
      <ListItem
        title="Full Stack Course Pre-Challenge"
        github_url="https://github.com/MickeyJ/largest-phone-number"
        info="My first programming challenge and the assessment for Galvanize Full Stack course."
        tech="Javascript"
      />
    </ul>
  </div>
);

export default ProjectList;