const musicStore='musicStore';

class Store{

constructor(){

this.localMusicStore=JSON.parse(localStorage.getItem(musicStore))||{};
}

addMusic=(fileDatas)=>{
  fileDatas.map(item=>{
    this.localMusicStore[item.fileName]=item.filePath;
  })
this.saveLocalStore();
}

deleteMusic=(fileName)=>{
delete this.localMusicStore[fileName];
this.saveLocalStore();
}


saveLocalStore=()=>{
  localStorage.setItem(musicStore,JSON.stringify(this.localMusicStore)); 
}





}

export default Store;