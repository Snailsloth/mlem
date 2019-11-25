import React, { Component } from 'react';
import ConsoleText from './ConsoleText'
import './Terminal.scss'

class Terminal extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleInvert : false
    }
   this.invertBody = this.invertBody.bind(this);
  }



  invertBody(){
    console.log(this)
    if(this.state.toggleInvert === false){
      document.body.classList.add("filter_Inverted");
      this.setState(state => ({
         toggleInvert: true
      }));
    } else {
      document.body.classList.remove("filter_Inverted");
      this.setState(state => ({
         toggleInvert: false
      }));
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
              <button onClick={this.invertBody} className="header-button--left"></button>
              <button className="header-button--center"></button>
              <button className="header-button--right"></button>
            </div>
            <span className="header-text">{this.props.headerTitle}</span>
          </div>
          <div className="terminal-content">
            <ConsoleText commandInput="whoiami" maxspeed="3500"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
