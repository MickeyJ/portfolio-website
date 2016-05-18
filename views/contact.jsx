import React, { Component } from 'react'
import DefaultLayout from './layout'

import ContactInfo from './components/ContactInfo'

export default class Contact extends Component{
  render() {
    return (
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <ContactInfo />

      </DefaultLayout>
    )
  }
}
