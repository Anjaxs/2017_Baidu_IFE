var root = document.getElementById('root');
var time = 0;
document.getElementById('preorder-btn').onclick = function () {
	time = 0;
	preorder(root);
};
document.getElementById('inorder-btn').onclick = function () {
	time = 0;
	inorder(root);
};
document.getElementById('postorder-btn').onclick = function () {
	time = 0;
	postorder(root);
};
document.getElementById('level-traversal-btn').onclick = function () {
	time = 0;
	levelTraversal(root);
};

function visit(node) {
	time += 500;
/*	console.log(node.id);*/
	console.log(time);
	node.style.backgroundColor = "white";
	setTimeout(function () {
		node.style.backgroundColor = "blue";
	},time);
}

function preorder(root) {
	if (root) {
		visit(root);
		preorder(root.children[0]);
		preorder(root.children[1]);
	}
}

function inorder(root) {
	if (root) {
		inorder(root.children[0]);
		visit(root);
		inorder(root.children[1]);
	}
}

function postorder(root) {
	if (root) {
		postorder(root.children[0]);
		postorder(root.children[1]);
		visit(root);
	}
}

function levelTraversal(root) {
	var queue = [];		//初始化空队列
	queue.push(root); //根结点入队

	while (queue.length) {  //队列不空循环

		var node = queue.shift(); //队头结点出队

		visit(node);	 //访问结点

		if(node.children[0]) { //如果左子树不为空
			queue.push(node.children[0]);  //左子树入队
		}

		if(node.children[1]) { //如果右子树不为空
			queue.push(node.children[1]);  //右子树入队
		}
	}
}
