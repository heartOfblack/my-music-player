import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './component/menuList'

class App extends React.Component{

  render(){

return (<div>
  <MenuList></MenuList>
</div>)

  }




}


ReactDOM.render(<App/>,document.querySelector('#app'));
