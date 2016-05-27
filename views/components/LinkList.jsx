import React from 'react'

const ListItem = (props) =>{
  if(props.demo_url){
    return(
      <li>
        <div className="title">
          <a className="github-link" href={props.github_url} target="_blank">
            {props.title}
          </a>
          <span> — </span>
          <a className="demo-link" href={props.demo_url} target="_blank">
            Live Demo
          </a>
        </div>
        
        <p>{props.info}</p>
      </li>
    )
  } else {
    return(
      <li>
        <a className="github-link" href={props.github_url} target="_blank">
          {props.title}
        </a>
        <p>{props.info}</p>
      </li>
    )
  }
};

const LinkList = (props) =>(
  <div id="link-list-box" className="col-md-5">
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
        info="React, Redux, Webpack, Express, Postgres"
      />
      <ListItem
        title="Angular-JWT"
        github_url="https://github.com/MickeyJ/reddit-clone-angular-jwt"
        demo_url="https://mickey-reddit-clone.herokuapp.com"
        info="Angular, Webpack, JWT, Express, Postgres"
      />
      <ListItem
        title="Express-React-Views"
        github_url="https://github.com/MickeyJ/express-react-view-seed"
        demo_url="https://react-express-demo.herokuapp.com"
        info="Express, Express-React-Views engine, Gulp"
      />
      <ListItem
        title="NodeJS-Todos"
        github_url="https://github.com/MickeyJ/node-pubsub-todos"
        info="Command line todo app, pub-sub style"
      />
      <ListItem
        title="The Code for this Site"
        github_url="https://github.com/MickeyJ/portfolio-website"
        info="Using the Express-React seed project above"
      />
    </ul>
  </div>
);

export default LinkList;