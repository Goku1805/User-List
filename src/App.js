//import React, { useState } from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  state = {
    persons: [
      { name: "Joseph S Ferland", username: "@joseph_ro" },
      { name: "Sebastian Mechal", username: "@sebMechel" },
      { name: "Milosz Pasternak", username: "@milo_P" },
      { name: "Betty Smith", username: "@bettySmith" },
      { name: "Edgar J Crowford", username: "@eddieCrowford" }
    ],
    search: ""
  };
  onChange = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    let filterPerson = this.state.persons.filter(person => {
      return (
        person.name.indexOf(this.state.search) !== -1 ||
        person.username.indexOf(this.state.search) !== -1
      );
    });
    return (
      <div className="container">
        <h2 className="text-center">User List</h2>
        <input
          className="form-control"
          type="search"
          placeholder="Enter text..."
          onChange={this.onChange}
        ></input>
        <br />

        <div>
          {filterPerson.map(person => (
            <div className="row m-4">
              <div className="col-8 ">{person.name}</div>

              <div className="col-6 text-muted">{person.username}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
// function App() {
//   return <div className="container">

//   </div>;
// }

// export default App;
