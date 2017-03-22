/**
 * 访问结点
 * @param  node 树结点
 */
function visit(node) { 
	time += 400;
	node.style.backgroundColor = "white";
	//每隔500毫秒变蓝色
	setTimeout(function () {
		node.style.backgroundColor = "blue";
	},time);
}


/**
 * 先序遍历
 * @param  root 根结点
 */
function preorder(root) {
	if (root) {
		visit(root);
		var children = root.getElementsByTagName('div');
		for (var i = 0; i < children.length; i++) {
			//只选择子一层div
			if(children[i].parentNode == root) {
				preorder(children[i]);
			}
		}
	}
}

/**
 * 后序遍历
 * @param   root 根结点
 */
function postorder(root) {
	if (root) {
		var children = root.getElementsByTagName('div');
		for (var i = 0; i < children.length; i++) {
			//只选择子一层div
			if(children[i].parentNode == root) {
				postorder(children[i]);
			}
		}
		visit(root);
	}
}

/**
 * 层序遍历
 * @param   root 根结点
 */
function levelTraversal(root) {
	var queue = [];		//初始化空队列
	queue.push(root); //根结点入队

	while (queue.length) {  //队列不空循环

		var node = queue.shift(); //队头结点出队

		visit(node);	 //访问结点

		var children = node.getElementsByTagName('div');
		for (var i = 0; i < children.length; i++) {
			//如果子树不为空，且是子一层
			if (children[i] && children[i].parentNode == node){
				//入队
				queue.push(children[i]);
			}
		}
	}
}


/*****************************查找*********************************/

/**
 * 检查是否找到
 */
function checkKey(root, key) {
	if(root.getElementsByTagName('span')[0].innerHTML == key){
		setTimeout(function () {
			root.style.backgroundColor = "yellow";
		},time + 400);
		flag = true;
		return true;
	}
}

/**
 * 先序遍历查找
 * @param  root 根结点
 */
function preorderSearch(root, key) {
	if (root && flag != true) {
		visit(root);
		checkKey(root, key);
		var children = root.getElementsByTagName('div');
		for (var i = 0; i < children.length; i++) {
			//只选择子一层div
			if(children[i].parentNode == root) {
				preorderSearch(children[i], key);
			}
		}
	}
}

/**
 * 后序遍历查找
 * @param   root 根结点
 */
function postorderSearch(root, key) {
	if (root && flag != true) {

		var children = root.getElementsByTagName('div');
		for (var i = 0; i < children.length; i++) {
			//只选择子一层div
			if(children[i].parentNode == root) {
				postorderSearch(children[i], key);
			}
		}

		if(flag != true) {
			visit(root);
		}
		checkKey(root, key);
		//console.log(flag);
	}
}

/**
 * 层序遍历查找
 * @param   root 根结点
 */
function levelTraversalSearch(root, key) {
	var queue = [];		//初始化空队列
	queue.push(root); //根结点入队

	while (queue.length) {  //队列不空循环

		var node = queue.shift(); //队头结点出队

		visit(node);	 //访问结点

		if(checkKey(node, key)){
			break;
		}

		var children = node.getElementsByTagName('div');
		for (var i = 0; i < children.length; i++) {
			//如果子树不为空，且是子一层
			if (children[i] && children[i].parentNode == node){
				//入队
				queue.push(children[i]);
			}
		}
	}
}