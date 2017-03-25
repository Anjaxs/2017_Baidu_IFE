/*data*/
var table = document.getElementsByTagName('table')[0].children[0];
var box = document.getElementById('box');
var command = document.getElementById('command');
var execBtn = command.nextElementSibling;

//方块初始位置
var pos = [6, 6];
//初始化小方块的方向
box.style.transform = "rotate(0deg)";

/*event*/
execBtn.onclick = execCommand;

function execCommand() {
	var num = box.style.transform.match(/-?\d+/);

	//1.获取操作命令
	switch(command.value) {
		case 'GO':
			//向前移一格
			moveStep();
			break;
		case 'TUN LEF':
			//左转
			box.style.transform = "rotate("+(parseInt(num)-90)%360+"deg)";
			break;
		case 'TUN RIG':
			//右转
			box.style.transform = "rotate("+(parseInt(num)+90)%360+"deg)";
			break;
		case 'TUN BAC':
			//后转
			box.style.transform = "rotate("+(parseInt(num)+180)%360+"deg)";
			break;
		default:
			alert("不能识别该命令");
			break;
	}
}

function moveStep() {
	//移除原来的小方块
	//box.remove();	
	//根据当前面向方位向前移
	var num = box.style.transform.match(/-?\d+/);
	console.log(parseInt(num), pos);
	switch(parseInt(num)) {
		//top
		case 0:
			if (checkCanMove('top')) {	
				table.children[--pos[0]].children[pos[1]].appendChild(box);
			}
			break;
		//right
		case 90:
		case -270:	
			if (checkCanMove('right')) {
				table.children[pos[0]].children[++pos[1]].appendChild(box);
			}
			break;
		//bottom
		case 180:
			if (checkCanMove('bottom')) {
				table.children[++pos[0]].children[pos[1]].appendChild(box);
			}
			break;
		//left
		case -90:
		case 270:
			if (checkCanMove('left')) {
				table.children[pos[0]].children[--pos[1]].appendChild(box);
			}
			break;
	}
}

function checkCanMove(direct) {
	flag = true;
	switch (direct) {
		case 'top' :
			if (pos[0] == 1) {
				flag = false;
			}
			break;
		case 'right' :
			if (pos[1] == 10) {
				flag = false;
			}
			break;
		case 'bottom' :
			if (pos[0] == 10) {
				flag = false;
			}
			break;
		case 'left' :
			if (pos[1] == 1) {
				flag = false;
			}
			break;
	}
	if (flag == false) {
		alert("已经到边界，不能再前进了！");
	}
	return flag;
}

