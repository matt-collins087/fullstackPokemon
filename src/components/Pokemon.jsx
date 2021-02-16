import React, { Component } from "react";

// Fix this file. Not all mistakes are explicitly labeled with FIX_ME

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    }
  }

  render() {
    return(
    <tr onClick={() =>  {this.setState({showDetails: !this.state.showDetails})}}>
      <td className="pokemon-name">
        {this.props.pokemon.name}
      </td>
      <td>
        <img src={this.props.pokemon.picture}></img>
      </td>
      {this.state.showDetails ?
      <td>
        {`level: ${this.props.pokemon.level} \ntype: ${this.props.pokemon.type}`}
      </td>
      : null}
    </tr>
    )
  }
}

export default Pokemon;