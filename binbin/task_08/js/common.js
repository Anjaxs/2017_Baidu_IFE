/*data*/
var root = document.getElementById('root'); //根结点
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
 */
function initBox() {
	var demo = document.getElementById('demo');
	var divs = demo.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = "white";
	}
}



