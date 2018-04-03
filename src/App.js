import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './ListContacts'


class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "https://men.asiansingles.com/upload/c/co/1381008.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://newscult.com/wp-content/uploads/2016/01/tumblr_kxivto2Ec41qzdnguo1_500.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  removeContact =(i) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== i.id)
    }))

  }
  render() {
    return (
      <div className="App">
      <ListContacts
        onDeleteContact={this.removeContact}
        contacts={this.state.contacts}/>
      </div>
    );
  }
}
export default App;
