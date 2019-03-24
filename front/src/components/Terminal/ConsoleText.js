import React, { Component } from 'react';

class ConsoleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandInput: this.props.commandInput,
      maxspeed: this.props.maxspeed,
      output: false
    };
  }

  initTyping(){

    const txtElement = document.querySelector(`.typeWriter`);
    console.log(txtElement);
    const words = this.state.commandInput;
    let i = 0;
    let writeText = () => {
      if(i < words.length){
        let speed = Math.floor(Math.random() * Math.floor(300));
        txtElement.innerHTML += words.charAt(i);
        i++;
        setTimeout(writeText, speed)
      }
      else{
        this.setState({
          output: true
        });
      }
    };
    writeText();
  }

  componentDidMount() {
    this.initTyping()
  }


  render() {

    let output = (
      <React.Fragment>
      <p><span></span>
      <span className="w100">~~~~~</span>
      <span>Name: </span><span className="blue">Oleg</span>
      <span className="w100"></span>
      <span>Location: </span><span className="blue">Russia, Saint-Petersburg</span>
      <span className="w100">~~~~~</span>
      </p>
      <p>
        <span></span><span className="cursor"></span>
      </p>
      </React.Fragment>
    )

    return (
      <React.Fragment>
      <p><span></span> <span className="typeWriter" data-words={this.state.commandtext}></span>
      </p>
      {
        this.state.output === true ? output : false
      }
      </React.Fragment>
    );
  }

}

export default ConsoleText;
