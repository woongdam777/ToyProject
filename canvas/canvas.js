const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

const colorOptions=Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event){
    isPainting = true;
}

function cancelPainting(event){
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange(event){
    // console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    // console.log(event.target.value);
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    // console.log(event.target);
    // console.dir(event.target);
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Draw";
    }else{
        isFilling = true;
        modeBtn.innerText = "Fill";
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onEraserClick(){
    ctx.strokeStyle = "White";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(event){
    // console.dir(event.target);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    // console.log(url);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0,0, CANVAS_WIDTH,CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoubleClick(event){
    // console.log(event.offsetX, event.offsetY);
    const text = textInput.value;
    if(text !== ""){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "48px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

function onSaveClick(){
    // console.log(canvas.toDataURL());
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png"
    a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove",onMove);  // canvas.onmousemove = onMove; 동일
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change",onLineWidthChange);
color.addEventListener("change",onColorChange);

colorOptions.forEach(color => color.addEventListener("click",onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);

// ctx.fillRect(210, 200, 15, 100);
// ctx.fillRect(350, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// ctx.arc(250,100,50,0,2*Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(260,80,5,0,2*Math.PI);
// ctx.arc(280,80,5,0,2*Math.PI);
// ctx.fill();

// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
// ]

// ctx.lineWidth = 2;
// let x_click = 0;
// let y_click = 0;
// function onClick(event){
//    // console.log(event); 좌표확인
//     ctx.beginPath();
//     // ctx.moveTo(0,0);
//     ctx.moveTo(x_click,y_click);
//     ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// // canvas.addEventListener("click", onClick);
// canvas.addEventListener("mousemove", onClick);