const musicStore='musicStore';

class Store{

constructor(){

this.localMusicStore=JSON.parse(localStorage.getItem(musicStore))||{"a":'d://a.mp3',"ac":'d://ac.mp3'};

}

addMusic=(fileData)=>{

this.localMusicStore[fileData.fileName]=fileData.filePath;

}

deleteMusic=(fileData)=>{
delete this.localMusicStore[fileData.fileName];
}


saveLocalStore=()=>{
  localStorage.setItem(musicStore,JSON.stringify(this.localMusicStore)); 
}





}

export default Store;