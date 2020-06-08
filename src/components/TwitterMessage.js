import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: '',
      charsLeft: props.maxChars
    };
  }

  handleMessageInput = (event) => {
    let charsCount = event.target.value.length
    const charsLeft = this.state.maxChars - charsCount

    this.setState({
      message: event.target.value,
      charsLeft: charsLeft
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.handleMessageInput(event)} type="text" name="message" id="message" value={this.state.message} />
        <p>{this.state.charsLeft} Characters Left</p>
      </div>
    );
  }
}

export default TwitterMessage;
