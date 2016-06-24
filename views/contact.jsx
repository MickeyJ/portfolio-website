import React, { Component } from 'react'
import DefaultLayout from './layout'

import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'

export default class Contact extends Component{
  render() {
    return (
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <ContactInfo />

        <ContactForm />

      </DefaultLayout>
    )
  }
}
