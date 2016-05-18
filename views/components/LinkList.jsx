import React from 'react'

const ListItem = (props) =>{
  if(props.demo_url){
    return(
      <li>
        <a className="github-link" href={props.github_url} target="_blank">
          {props.title}
        </a>
        <p> - {props.info}</p>
        <p>
          <a className="demo-link" href={props.demo_url} target="_blank">
            Live Demo
          </a>
        </p>
      </li>
    )
  } else {
    return(
      <li>
        <a className="github-link" href={props.github_url} target="_blank">
          {props.title}
        </a>
        <p> - {props.info}</p>
      </li>
    )
  }
};

const LinkList = (props) =>(
  <div className="col-md-5">
    <h2>Awesome GitHub Stuff</h2>
    <ul className="nice-list">
      <ListItem
        title="Galvanize Pre-Challenge"
        github_url="https://github.com/MickeyJ/largest-phone-number"
        info="pre-challenge assessment for Galvanize enrollment"
      />
      <ListItem
        title="Personal Project"
        github_url="https://github.com/MickeyJ/personal-project"
        demo_url="http://personal-project.herokuapp.com"
        info="pre-course work, preparing for Galvanize"
      />
      <ListItem
        title="React-Redux-Webpack"
        github_url="https://github.com/MickeyJ/react-redux-crud"
        demo_url="https://comments-redux.herokuapp.com"
        info="using React, Redux, Webpack, Express, Postgres"
      />
      <ListItem
        title="Angular-JWT"
        github_url="https://github.com/MickeyJ/reddit-clone-angular-jwt"
        demo_url="https://mickey-reddit-clone.herokuapp.com"
        info="using Angular, Webpack, JWT, Express, Postgres"
      />
      <ListItem
        title="Express-React-Views"
        github_url="https://github.com/MickeyJ/express-react-view-seed"
        demo_url="https://react-express-demo.herokuapp.com"
        info="Express server with React-Express-Views engine"
      />
      <ListItem
        title="NodeJS-Todos"
        github_url="https://github.com/MickeyJ/node-pubsub-todos"
        info="command line todo app, pub-sub style"
      />
    </ul>
  </div>
);

export default LinkList;