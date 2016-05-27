import React from 'react'

const ContactInfo = (props) =>(
  <div className="contact-box">
    <h2>Contact Info</h2>
    <div className="col-md-5 col-xs-12" >
      <table id="contact-table" className="table">
        <tbody>
        <tr>
          <th>Email</th>
          <td>
            <a href="mailto:develop.agility@gmail.com">
              develop.agility@gmail.com
            </a>
          </td>
        </tr>
        <tr>
          <th>Facebook</th>
          <td>
            <a href="https://www.facebook.com/Mickey4D" target="_blank">
              facebook.com/Mickey4D
            </a>
          </td>
        </tr>
        <tr>
          <th>GitHub</th>
          <td>
            <a href="https://github.com/MickeyJ" target="_blank">
              github.com/MickeyJ
            </a>
          </td>
        </tr>
        <tr>
          <th>LinkedIn</th>
          <td>
            <a href="https://www.linkedin.com/in/michael-malotte" target="_blank">
              linkedin.com/in/michael-malotte
            </a>
          </td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>
            <a href="tel:+18057106302" >
              805-710-6302
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ContactInfo;