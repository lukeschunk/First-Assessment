import React, { Component } from "react";
import axios from "axios";

import Creature from "./components/Creatures";
import NewCreatureForm from "./components/NewCreatureForm";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor() {
    super();
    this.state = {
      creature: [],
      image: "",
      scary: ""
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/creature").then(response => {
      console.log(response);
      this.setState({
        creature: response.data
      });
    });
  }
  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleSubmit = () => {
    const { creature, image, scary } = this.state;
    axios
      .post(BASE_URL + "/add-creature", {
        creature,
        image,
        scary
      })
      .then(response => {
        console.log(response);
        this.setState({
          creatures: response.data
        });
      });
  };

  handleGetCreatures() {
    axios.get(BASE_URL + "/creatures").then(response => {
      this.setState({ creaturesToDisplay: response.data });
    });
  }

  render() {
    const creaturesToRender = this.state.creature.map((creature, index) => {
      return (
        <div key={index}>
          <Creature creature={creature} />
        </div>
      );
    });
    return (
      <div>
        <NewCreatureForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleGetCreatures={this.handleGetCreatures}
        />
        {creaturesToRender}
      </div>
    );
  }
}

export default App;
