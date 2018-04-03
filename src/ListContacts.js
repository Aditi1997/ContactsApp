import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component{
  static PropTypes = {
    contacts: PropTypes.object.required,
    onDeleteContact: PropTypes.func.isRequired
  }

    state = {
      query: ''
    }

    updateQuery = (query) => {
      this.setState({query: query.trim() })
    }

    render() {

      let showingContacts
      if(this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        showingContacts = this.props.contacts.filter((i) => match.test(i.name))
      }
      else {
        showingContacts = this.props.contacts
      }

      return (
        <div className='contact-list'>
         {JSON.stringify(this.state)}
          <div className = 'list-contacts-top'>
            <input className='search-contacts'
                   type= 'text'
                   placeholder= 'Search contacts'
                   value= {this.state.query}
                   onChange={ (event) => this.updateQuery(event.target.value)}
                   />
          </div>
          <ol className='contact-list'>
           {showingContacts.map((i) => (
            <li key={i.id}
            className='contact-list-item'>
            <div className='contact-avatar'
            style={{
              backgroundImage:
              `url(${i.avatarURL})`
            }}/>
            <div className='contact-details'>
            <p>{i.name}</p>
            <p>{i.email}</p>
            </div>
            <button onClick={() => this.props.onDeleteContact(i)} className='contact-remove'>
              Remove
            </button>
            </li>
            ))}
         </ol>
      </div>

      )
    }
  }

export default ListContacts
