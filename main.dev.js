import {app,BrowserWindow} from 'electron';

app.on('ready',()=>{

 let mainWindow=new BrowserWindow({
  width:1360,
  height:768
  
});
console.log(__dirname)
mainWindow.loadURL(`file://${__dirname}/index.html`);
mainWindow.webContents.on('did-finish-load',()=>{
  mainWindow.show();
  mainWindow.webContents.openDevTools();

})


})
