import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './component/menuList';
import Draw from './Draw';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      musicSrc:''
    }

  }
    componentDidMount() {
     
        new Draw();

    }

    playMusic=src=>{
      this.setState({musicSrc:src},()=>{
        console.log(this.state.musicSrc);
        document.querySelector('audio').play();
      });
    }

    render() {
      console.log(this.state.musicSrc);
      const {musicSrc}=this.state;
     
        return (
            <div className="app">
                <MenuList app={this}/>
                <canvas className="canvas" width='1120' height='590'></canvas>
                <audio
                    src={musicSrc}
                    className="controller"
                    controls></audio>
            </div>
        )

    }

}

ReactDOM.render(
    <App/>, document.querySelector('#root'));
