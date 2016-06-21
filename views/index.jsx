import React, { Component } from 'react'
import DefaultLayout from './layout'

import ProjectList from './components/ProjectList'
import SkillsList from './components/SkillsList'

export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <div className="row-fluid">
          <ProjectList />
        </div>


      </DefaultLayout>
    )
  }
}
