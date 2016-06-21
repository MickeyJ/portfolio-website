import React from 'react'

const images = (project, count) =>{
  const imgs = [];
  for (var i = 0; i < count; i++) {
    imgs[i] = `/images/${project}/${i + 1}.png`;
  }
  return imgs;
};

const ListItem = (props) =>{
  if(props.img){
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

          <section className={`img-grid cell-1600-${props.img[1]} cell-950-${Math.ceil(props.img[1] / 2)} cell-500-1`}>
            {images(props.img[0], props.img[1]).map((x, i) =>(
              <a href={`${x}`} >
                <img key={i} className="img-box" src={x} alt={x}/>
              </a>
            ))}
          </section>

        </li>
      )
    } else {
      return(
        <li>
          <a className="github-link" href={props.github_url} target="_blank">
            {props.title}
          </a>
          <p>{props.info}</p>
          <section className={`img-grid cell-1600-${props.img[1]} cell-950-${Math.floor(props.img[1] / 2)} cell-500-2 cell-380-1`}>
            {images(props.img[0], props.img[1]).map((x, i) =>(
              <a href={`${x}`} >
                <img key={i} className="img-box" src={x} alt={x}/>
              </a>
            ))}
          </section>

        </li>
      )
    }
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

const ProjectList = (props) =>(
  <div id="link-list-box">
    <h2>Awesome GitHub Stuff</h2>
    <ul className="nice-list">
      <ListItem
        title="Galvanize Pre-Challenge"
        github_url="https://github.com/MickeyJ/largest-phone-number"
        info="pre-challenge assessment for Galvanize enrollment"
      />
      <ListItem
        title="Personal Project"
        img={['personal', 5]}
        github_url="https://github.com/MickeyJ/personal-project"
        demo_url="http://personal-project.herokuapp.com"
        info="Pre-course work for Galvanize. Express, Gulp, Sass, jQuery"
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
        title="React-Redux-JWT"
        img={['q3', 5]}
        github_url="https://github.com/MickeyJ/q3-react-starter"
        demo_url="https://easy-speak.herokuapp.com/"
        info="React, Redux, Webpack, Express, JWT, Postgres. Sign up or log in as Bob - Email: 'bob@mail.com' Password: 'asdf'"
      />
      <ListItem
        title="Sass & Express-React-Views"
        img={['sass', 9]}
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
        title="The Code for this Site"
        github_url="https://github.com/MickeyJ/portfolio-website"
        info="Using the Express-React seed project above"
      />
    </ul>
  </div>
);

export default ProjectList;