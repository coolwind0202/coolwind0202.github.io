const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function on_text_change(){
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  	ctx.save();
  
	let text_content = document.getElementById("text1").value;
	console.log(text_content);
  
  	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.font = "500px ../coolwind0202/LOGOTYPEJP_MP_B_1.1.TTF";
	ctx.fillStyle = "lime";
	
	ctx.scale(1/text_content.length,1);
	ctx.fillText(text_content, 0, 260);
  ctx.restore();
}

function on_save_click(){
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
  	a.download = "result.png";
  	a.click();
}
