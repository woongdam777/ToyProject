const colorOptions=Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

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
canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
lineWidth.addEventListener("change",onLineWidthChange);
color.addEventListener("change",onColorChange);

colorOptions.forEach(color => color.addEventListener("click",onColorClick));



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