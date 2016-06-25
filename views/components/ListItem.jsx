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

          <section className={`img-grid cell-2700-${props.img[1]} cell-1600-${props.img[1]} cell-950-${Math.ceil(props.img[1] / 2)} cell-500-2 cell-380-1`}>
            {images(props.img[0], props.img[1]).map((x, i) =>(
              <a key={i} href={`${x}`} >
                <img className="img-box" src={x} alt={x}/>
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
          <section className={`img-grid cell-2700-${props.img[1]} cell-1600-${props.img[1]} cell-950-${Math.floor(props.img[1] / 2)} cell-500-1 cell-380-1`}>
            {images(props.img[0], props.img[1]).map((x, i) =>(
              <a key={i} href={`${x}`} >
                <img className="img-box" src={x} alt={x}/>
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

export default ListItem