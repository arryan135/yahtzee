import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const className = `RuleRow RuleRow-${this.props.score === undefined ? "active" : "disabled"}`
    const scoreDisplay = this.props.score === undefined ? this.props.description : this.props.score;
    return (
      <tr className={className} onClick={this.props.score === undefined ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{scoreDisplay}</td>
      </tr>
    )
  }
}

export default RuleRow;