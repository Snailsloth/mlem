import React, { Component } from "react";

class ConsoleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      commandInput: this.props.commandInput,
      maxspeed: this.props.maxspeed,
      output: false
    };
  }

  initTyping() {
    const txtElement = document.querySelector(`.typeWriter`);
    const words = this.state.commandInput;
    let i = 0;
    let writeText = () => {
      if (i < words.length) {
        let speed = Math.floor(Math.random() * Math.floor(300));
        txtElement.innerHTML += words.charAt(i);
        i++;
        setTimeout(writeText, speed);
      } else if (i === words.length && this.state.isMounted === false) {
        return null;
      } else {
        this.state.isMounted
          ? this.setState({
              output: true
            })
          : this.setState({
              output: false
            });
      }
    };
    writeText();
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
    this.initTyping();
  }

  componentWillUnmount() {
    this.setState({
      isMounted: false,
      output: false
    });
  }

  render() {
    let output = (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <th className='blue'>Name:</th>
              <td>Oleg</td>
            </tr>
            <tr>
              <th className='blue'>Location:</th>
              <td>Russia, Saint-Petersburg</td>
            </tr>
            <tr>
              <th>
                <span className='icon heart' />
              </th>
              <td>
                <span className='w100 icon node icon-text'>
                  Node JS , Express
                </span>
                <span className='w100 icon js icon-text'>JS</span>
                <span className='w100 icon pug icon-text'>Pug</span>
                <span className='w100 icon stylus icon-text'>Stylus, Sass</span>
                <span className='w100 icon react icon-text'>React</span>
              </td>
            </tr>
            <tr>
              <th className='blue'>
                <b>Last</b> projects:
              </th>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://gwg.su/'
                >
                  https://gwg.su/
                </a>{" "}
                <br />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://gw.spb.ru/'
                >
                  https://gw.spb.ru/
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          <span className='cursor' />
        </p>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <p>
          <span className='typeWriter' data-words={this.state.commandtext} />
        </p>
        {this.state.output === true ? output : null}
      </React.Fragment>
    );
  }
}

export default ConsoleText;
