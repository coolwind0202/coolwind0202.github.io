const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function on_text_change(){
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  	ctx.save();
  
	let text_content = document.getElementById("text1").value;
  	let op = document.getElementById("opa").checked;
  
 	ctx.fillStyle = "white";
  
  	if(op){
		ctx.fillRect(0, 0, canvas.width, canvas.height);
   	}

	ctx.font = "bold 300px Noto Sans JP";
	ctx.fillStyle = "lime";
  
  	let text_width = ctx.measureText(text_content);
	
	ctx.scale(1/(text_width.width/300),1);
	ctx.fillText(text_content, 0, 260);
	ctx.restore();
}

function on_save_click(){
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
  	a.download = "result.png";
  	a.click();
}
