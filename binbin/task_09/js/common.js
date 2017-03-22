/*data*/
var demo = document.getElementById('demo');
var divs = demo.getElementsByTagName('div');
var root = document.getElementById('root'); //根结点
var createBtn = document.getElementById('create-btn');
var deleteBtn = document.getElementById('delete-btn');
var newNodeText = document.getElementById('new-node-text');
var time = 0, flag = false;	

/*event*/
document.getElementById('traversal-btn').onclick = function () {
	time = 0;	//每点击一次时间初始化
	opt = getRadioBoxValue('traversal');
	switch(opt) {
		case 'preorder':
			preorder(root);
			break;
		case 'postorder':
			postorder(root);
			break;
		case 'level':
			levelTraversal(root);
			break;
	}
};
document.getElementById('search-btn').onclick = function () {
	initBox()  //初始化结点背景
	var key = document.getElementById('search-text').value.trim(); //查找关键字
	time = 0;	//每点击一次时间初始化
	flag = false;
	opt = getRadioBoxValue('search');
	
	switch(opt) {
		case 'preorder':
			preorderSearch(root, key);
			break;
		case 'postorder':
			postorderSearch(root, key);
			break;
		case 'level':
			levelTraversalSearch(root, key);
			break;
	}

	if(!flag) {
		setTimeout(function () {
			alert('抱歉，没有找到！');
		},time+400);
	}
}
for (var i = 0; i < divs.length; i++) {

	divs[i].onclick = selectDiv;	
}
document.onclick = function () {	//点击其他地方禁用 增加删除结点按钮
	initBox();	//把以前选过的div边框变成原来的黑色
	createBtn.setAttribute('disabled','disabled');
	deleteBtn.setAttribute('disabled','disabled');
}




/*common function*/
function getRadioBoxValue(radioName) { 
    var obj = document.getElementsByName(radioName);  //这个是以标签的name来取控件
    for(i=0; i<obj.length; i++) {
      	if(obj[i].checked) { 
        	return obj[i].value; 
      	} 
    }         
    return "undefined";       
}

/**
 * 将所有结点的背景都变为白色
 * 将所有结点的边框色都变为黑色
 */
function initBox() {
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = "white";
		divs[i].style.borderColor = "#000";
	}
}
/**
 * 计算结点的儿子数
 */
function getChildrenCount(node) {
	var count = 0;
	var children = node.getElementsByTagName('div');
	for (var i = 0; i < children.length; i++) {
		
		if (children[i].parentNode == node){
			count++;
		}
	}
	return count;
}
/**
 * 计算node结点的高度
 */
function getNodeHeight(node) {
	var count = 1;
	while (node.parentNode != root) {
		node = node.parentNode;
		count++;
	}
	return count;
}
/**
 * 让node结点的所有子结点的边框变颜色
 */
function cChildrenBColor(node, color) {
	var ds = node.getElementsByTagName('div');
	for (var i = 0; i < ds.length; i++) {
		ds[i].style.borderColor = color;
	}
}

/**
 * 点击结点发生的事
 */
function selectDiv(event) {
	window.event? window.event.cancelBubble = true : event.stopPropagation(); //阻止冒泡
	initBox();	//把以前选过的div边框变成原来的黑色
	newNodeText.focus();	//聚焦输入框
	newNodeText.value = "";	//清空输入框
	this.style.borderColor = "red"; //选择的div边框变红色
	cChildrenBColor(this,"green");	//儿子结点的边框变绿色
	//点击div启用增加删除结点按钮
	createBtn.removeAttribute('disabled');	
	deleteBtn.removeAttribute('disabled');

	var div = this;

	deleteBtn.onclick = function () {
		console.log(div);
		div.remove();
	}
	createBtn.onclick = function () {
		var span = document.createElement('span');
		var newDiv = document.createElement('div');
		span.innerHTML = newNodeText.value;
		newDiv.appendChild(span);
		div.appendChild(newDiv);
		var offsetLeft = getChildrenCount(div) * 60;
		console.log(getNodeHeight(newDiv));
		newDiv.style.right = (120 - offsetLeft)* (4 - getNodeHeight(newDiv)) + "px";

		//给新结点添加点击事件
		newDiv.onclick = selectDiv;
	}
}

