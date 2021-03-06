import React, { Component } from "react";
import "./App.css";
import {CardList} from "./components/card-list/card-list.component.jsx"
import {SearchBox} from "./components/search-box/search-box.compontent.jsx"
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this); // not necessary with an arrow function
  };

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  };
  handleChange = (e) => { // arrow function saves the bing mentioned above
    this.setState(
      { 
        searchField: e.target.value 
      }
    )
  }
  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=> 
      monster
      .name
      .toLowerCase()
      .includes(
        searchField.toLowerCase()
      )
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={ filteredMonsters }>
        </CardList>
      </div>
    );
  }
}
export default App;
