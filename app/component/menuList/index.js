import React from 'react';
import Store from '../../store';

class MenuList extends React.Component{

constructor(){
  super();
this.Store=new Store();
this.musicObj=this.Store.localMusicStore;
}


/**
 *新增音乐
 *
 * @memberof MenuList
 */
addMusic=()=>{



}


render(){

return <div className="left"><ul>
{
  Object.keys(this.musicObj).map(item=>{

   <li>{item}{this.musicObj[item]}</li>

})}
 </ul>

</div>


}









}

export default MenuList;