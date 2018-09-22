import React, { Component } from "react";

class NewCreatureForm extends Component {
  render() {
    const { handleChange, handleSubmit, handleGetCreatures } = this.props;
    return (
      <div>
        <input
          onChange={event => handleChange(event, "Creature")}
          placeholder="Creature"
        />
        <input
          onChange={event => handleChange(event, "image")}
          placeholder="image"
        />
        <input
          onChange={event => handleChange(event, "scary")}
          placeholder="scary"
        />
        <button onClick={handleGetCreatures}>Get Creatures</button>
        <button onClick={handleSubmit}>Add Creature</button>
      </div>
    );
  }
}

export default NewCreatureForm;
