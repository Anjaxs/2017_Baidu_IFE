/*data*/
var table   = document.getElementsByTagName('table')[0].children[0];
var box     = document.getElementById('box');
var command = document.getElementById('command');
var execBtn = command.nextElementSibling;
var movetimer = null;
var turntimer = null;
var DIRECTION = {
	"top"   : [-1,  0,   0], 
	"right" : [ 0,  1,  90], 
	"bottom": [ 1,  0, 180], 
	"left"  : [ 0, -1, 270]
};

//方块的边长
var boxBorderLen = 40;
//方块初始位置
var pos = [6, 6];
box.style.top  = boxBorderLen * pos[0] + "px";
box.style.left = boxBorderLen * pos[1] + "px";
//初始化小方块的方向
box.style.transform = "rotate(0deg)";

/*event*/
execBtn.onclick = execCommand;

function execCommand() {

	//1.获取操作命令
	switch(command.value) {
		case 'GO':
			//向前移一格
			moveStep();
			break;
		case 'TUN LEF':
			//左转
			turn('left');
			break;
		case 'TUN RIG':
			//右转
			turn('right')
			break;
		case 'TUN BAC':
			//后转
			turn('back');
			break;
		//task_05扩展的命令
		case 'TRA LEF':
			//向屏幕的左侧移动一格，方向不变
			tra('left');
			break;
		case 'TRA TOP':
			//向屏幕的上面移动一格，方向不变
			tra('top');
			break;
		case 'TRA RIG':
			//向屏幕的右侧移动一格，方向不变
			tra('right');
			break;
		case 'TRA BOT':
			//向屏幕的下面移动一格，方向不变
			tra('bottom');
			break;
		case 'MOV LEF':
			//方向转向屏幕左侧，并向屏幕的左侧移动一格
			move('left');
			break;
		case 'MOV TOP':
			//方向转向屏幕上面，向屏幕的上面移动一格
			move('top');
			break;
		case 'MOV RIG':
			//方向转向屏幕右侧，向屏幕的右侧移动一格
			move('right');
			break;
		case 'MOV BOT':
			//方向转向屏幕下面，向屏幕的下面移动一格
			move('bottom');
			break;
		default:
			alert("不能识别该命令");
			break;
	}
}

/*向前进一步*/
function moveStep() {
	//根据当前面向方位向前移
	var num = box.style.transform.match(/-?\d+/);
	switch(parseInt(num)) {
		//top
		case 0:
			tra('top');
			break;
		//right
		case 90:
		case -270:	
			tra('right');
			break;
		//bottom
		case 180:
			tra('bottom');
			break;
		//left
		case -90:
		case 270:
			tra('left');
			break;
	}
}

/*检测边界*/
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

/*旋转动画*/
function startTurn(direct, itarget) {
	var num = box.style.transform.match(/-?\d+/);
	clearInterval(turntimer);//执行当前动画同时清除之前的动画
	turntimer = setInterval(function(){
		if (direct == "left") {
			speed = -1;
		} else {
			speed = 1;
		}
		
		if((parseInt(num)+speed)%360 == itarget){
			clearInterval(turntimer);
		}
		else{
			num = box.style.transform.match(/-?\d+/);
			box.style.transform = "rotate("+(parseInt(num)+speed)%360+"deg)";
		}
	},10);
}

/*移动动画*/
function startMover(direct, itarget1, itarget2){//目标值
	clearInterval(movetimer);//执行当前动画同时清除之前的动画
	
	movetimer = setInterval(function(){
		var speed1 = DIRECTION[direct][0];
		var speed2 = DIRECTION[direct][1];
		
		if(parseInt(box.style.top ) == itarget1 && parseInt(box.style.left) == itarget2){
			clearInterval(movetimer);
		}
		else{
			box.style.top  = parseInt(box.style.top ) + speed1 + "px";
			box.style.left = parseInt(box.style.left) + speed2 + "px";
		}

	},30);
}

/*方向旋转*/
function turn(direct) {
	var num = box.style.transform.match(/-?\d+/);
	switch (direct) {
		case 'right' :
			startTurn(direct, parseInt(num)+90);
			break;
		case 'back' :
			startTurn(direct, parseInt(num)+180);
			break;
		case 'left' :
			startTurn(direct, parseInt(num)-90);
			break;
	}
}

/*向屏幕的direct移动一格，方向不变*/
function tra(direct) {
	if (checkCanMove(direct)) {	
		pos[0] += DIRECTION[direct][0];
		pos[1] += DIRECTION[direct][1];
		table.children[ pos[0] ].children[ pos[1] ].appendChild(box);
		startMover(direct, boxBorderLen * pos[0], boxBorderLen * pos[1]);
	}
}

/*方向转向屏幕direct，向屏幕的direct移动一格*/
function move(direct) {
	if (checkCanMove(direct)) {
		pos[0] += DIRECTION[direct][0];
		pos[1] += DIRECTION[direct][1];	
		table.children[ pos[0] ].children[ pos[1] ].appendChild(box);
		box.style.transform = "rotate("+ DIRECTION[direct][2] +"deg)";
		startMover(direct, boxBorderLen * pos[0], boxBorderLen * pos[1]);
	}		
}

