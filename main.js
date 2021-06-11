canvas=document.getElementById("myCanvas");
   ctx=canvas.getContext("2d");
     color="blue";
     ctx.beginPath();
     ctx.strokeStyle="grey";
     ctx.lineWidth=4;
     ctx.rect(150, 143, 430, 200);
     ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth - 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth - 5;
ctx.arc(310, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth - 1;
ctx.arc(370, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth - 1;
ctx.arc(280, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth - 1;
ctx.arc(340, 270, 40, 0, 2 * Math.PI);
ctx.stroke();