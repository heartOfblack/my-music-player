class Draw{

constructor(){
this.canvas=document.querySelector('.canvas');
this.canvasCtx=this.canvas.getContext('2d');
let audio=document.querySelector('audio');
let audioContext=new AudioContext();
let audioElementSource=audioContext.createMediaElementSource(audio);
this.analyser=audioContext.createAnalyser();
this.analyser.fftSize = 256;
audioElementSource.connect(this.analyser);
this.analyser.connect(audioContext.destination);

//初始化第一频数据
let bufferLength = this.analyser.fftSize;
this.dataArray = new Uint8Array(bufferLength);
this.analyser.getByteFrequencyData(this.dataArray);
window.requestAnimationFrame(this.draw);

}

draw=()=>{
const {analyser,canvas,canvasCtx,dataArray,draw}=this;

    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    canvasCtx.lineWidth = 1;
    canvasCtx.strokeStyle = 'rgb(127, 99, 10)';

    canvasCtx.fillStyle = 'rgb(198, 25, 98)';
    let sliceWidth = canvas.width / analyser.frequencyBinCount;
    let x = 0;

    canvasCtx.beginPath();
      for(let i = 0; i < analyser.frequencyBinCount; i++) {
      let x0=x;
      let y0=dataArray[i];
      canvasCtx.moveTo(x0,y0);
      canvasCtx.fillRect(x0,canvas.height-y0,sliceWidth,y0);
      canvasCtx.arc(x0+sliceWidth/2,canvas.height-y0-15,2,0,2*Math.PI);
      x+=sliceWidth;

    } 
    canvasCtx.closePath();
    canvasCtx.fill()  
    

}


}
export default Draw;


