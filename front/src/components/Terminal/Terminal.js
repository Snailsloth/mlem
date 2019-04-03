import React, { Component } from 'react';
import ConsoleText from './ConsoleText'
import './Terminal.scss'

class Terminal extends Component {
  state = {
    text: {
      first: {
        input: "whoiami",
      }
    }
  }


  //размер окна
  getWindowSize(){
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowSizeArr = [windowWidth,windowHeight];
    return windowSizeArr;
  }

  //координаты указателя
  getMouseCoords(event){
    let coordX = event.clientX;
    let coordY = event.clientY;
    let coordArr = [coordX,coordY]
    return coordArr;
  }


  skewThis(elemClass){
    let root = document.documentElement;
    const windowSize = this.getWindowSize();
    window.addEventListener("mousemove", (event)=>{
      //следим за координатами мыши при её движении
      let mouseCoords = this.getMouseCoords(event);

      //количество пикселей, при котором должен быть наклон в 1 градус
      let tmpX = windowSize[0] / 40;
      let tmpY = windowSize[1] / 40;

      let virtualXcenter = windowSize[0] / 2;
      let virtualYcenter = windowSize[1] / 2;

      let xX = (mouseCoords[0] -virtualXcenter) / tmpX;
      let yY = (mouseCoords[1] -virtualYcenter) / tmpY;
      //меняем :root правила transform у окна терминала(прописаны в scss компонента)
      root.style.setProperty('--terminal-x', Math.ceil(xX) + "deg");
      root.style.setProperty('--terminal-y', Math.ceil(yY) + "deg");
    });
  }

  componentDidMount() {
    this.skewThis('.terminal')
  }


  render() {
    return (
      <div className="shadow-wrapper">
        <div className="terminal">
          <div className="header">
            <div className="header-buttons">
              <span className="header-button--left"></span>
              <span className="header-button--center"></span>
              <span className="header-button--right"></span>
            </div>
            <span className="header-text">{this.props.headerTitle}</span>
          </div>
          <div className="terminal-content">
            <ConsoleText commandInput={this.state.text.first.input} maxspeed="3500"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
