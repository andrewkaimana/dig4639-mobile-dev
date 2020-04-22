import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchUsers();
  }

  add = (event) => {
    event.preventDefault();
		fetch('http://plato.mrl.ai:8080/contacts/add', {
			method: 'POST',
			body: JSON.stringify({ 
        name: this.refs.firstName.value + ' ' + this.refs.lastName.value,
			  number: this.refs.phone.value }),
			headers: { "Content-type": "application/json", API: "kaimana" }
    })
    .then(res => { return res.json() })
    .then(() => {
      this.fetchProfile();
      this.fetchUsers();
      });
    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    this.refs.phone.value = "";
  }
  
  delete = (index) => {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: 'POST',
      body: JSON.stringify({ position: index }),
      headers: { "Content-type": "application/json", API: "kaimana" }
    })
    .then(res => {  return res.json() }) 
    .then(() => {
      this.fetchProfile();
      this.fetchUsers();
    });
  }
  
  fetchProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", { 
      headers: { API: "kaimana" } 
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ profile: data });
      console.log(data)
    });
  }

  fetchUsers() {
    window.fetch("http://plato.mrl.ai:8080/contacts", { 
      headers: { API: "kaimana" } 
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ contacts: data.contacts });
      console.log(data)
    });
  }

  render() {
  return (
    <div>
      <h2 className="header mt-3">Contacts</h2>
      <div>
        <hr />
        <h3 className="header2 ml-2"> {this.state.profile.name} <br /></h3>
            <p className="profile ml-2">My Profile</p>
            <p className="NumofContacts ml-2"># of Contacts: {this.state.profile.count}</p>
            <hr />
      </div>
      <div>
        <h3 className="header2 ml-2">Contact List:</h3>
       {
         this.state.contacts.map((value, index) => {
           return <p className="contacts ml-2" key={index}>{index + 1}. <u>Name:</u> {value.name}<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;<u>Phone:</u> {value.number}<br/><button type="submit" 
           onClick={() => this.delete(index)} className="deleteButton ml-3" id={index}>Delete </button></p>;
         })
       }
       <hr />
      </div>
      <form id="myForm" onSubmit={this.add}>
        <fieldset>
          <legend className="header2 ml-2">New Contact</legend>
          <dl>
              <dt><label for="firstName" className="form ml-2">First Name</label></dt>
              <dd><input ref="firstName" type="text" placeholder="John" className="inputBox ml-2" required></input></dd>
              <span></span>

              <dt><label for="lastName" className="form ml-2">Last Name</label></dt>
              <dd><input ref="lastName" type="text" placeholder="Smith" className="inputBox ml-2" required></input></dd>
              <span></span>

              <dt><label for="phone" className="form ml-2">Phone #</label></dt>
              <dd><input ref="phone" type="text" placeholder="xxx-xxx-xxxx" className="inputBox ml-2" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input></dd>
              <span></span>
          </dl>
          <button type="submit" className="myButton ml-4">Add</button>
        </fieldset>
      </form>
      <br/>
    </div>
    );
  }
}

export default App;