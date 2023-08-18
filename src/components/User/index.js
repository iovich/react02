import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColorIndex: 0,
      buttonColors: ['red', 'green'],
    }
  }

  btnColor = () => {
    const { buttonColorIndex, buttonColors } = this.state;
    const nextColorIndex = (buttonColorIndex + 1) % buttonColors.length;
    this.setState({ buttonColorIndex: nextColorIndex });
  }

  render() {
    console.log('render');
    const { name, avatar, married } = this.props;
    const { buttonColorIndex, buttonColors } = this.state;
    const btnStyle = { backgroundColor: buttonColors[buttonColorIndex] };

    return (
      <article>
        <button onClick={this.btnColor} style={btnStyle}>button</button>
        <h2>{name}</h2>
        <img src={avatar} alt='' />
      </article>
    );
  }
}

export default User;
