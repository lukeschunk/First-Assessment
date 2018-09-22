import React, { Component } from "react";

class Creature extends Component {
  render() {
    const { name, image_url, scary } = this.props.creature;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{image_url}</h2>
        <h2>{scary}</h2>
      </div>
    );
  }
}
export default Creature;
