import React from 'react';

import ContactInput from '../contact-input/contact-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact.styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      question: ''

    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ name:'', email: '', subject: '', question: ''})
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='contact'>
        <h2>DROP US A LINE</h2>
        <span>We love to hear from our customers, wheather you are a company or individual.</span>

        <form onSubmit={this.handleSubmit}>
          <ContactInput
            name='name'
            type='name'
            handleChange={this.handleChange}
            value={this.state.name}
            label='name'
            required
            />

          <ContactInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
            />


          <ContactInput
            name='subject'
            type='subject'
            handleChange={this.handleChange}
            value={this.state.subject}
            label='subject'
            required
            />
          

          <ContactInput
            name='question'
            type='question'
            handleChange={this.handleChange}
            value={this.state.question}
            label='question'
            required
            />
          <CustomButton type='submit'> Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default Contact;
