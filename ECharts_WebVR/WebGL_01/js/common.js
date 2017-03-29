function init() {
	//渲染器
	var renderer = new THREE.WebGLRenderer({
	    canvas: document.getElementById('mainCanvas'),
	    antialias: true,   //  开启消除锯齿,默认false
	    precision: "highp"   // 渲染精度  highp/mediump/lowp
	});
	renderer.setClearColor(0x777777); 
	//场景
	var scene = new THREE.Scene();
	
	//照相机
	var camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
	//设置相机摆放位置
    camera.position.set(-5, 5, 5);
    //设置相机看向的位置
    camera.lookAt(new THREE.Vector3(0,0,0));
	//照相机也需要被添加到场景中。
    scene.add(camera);
	
	// 创建一个长方体
	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 3),
        new THREE.MeshBasicMaterial({
        	wireframe: false,
            color: 0xaaaaaa,
        })
    );
	
	scene.add(cube);

	//轮胎1
	var torus1 = new THREE.Mesh(new THREE.TorusGeometry(0.2,0.08,8,20),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    );
    //轮胎2
	var torus2 = new THREE.Mesh(new THREE.TorusGeometry(0.2,0.08,8,20),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    );
    //轮胎3
	var torus3 = new THREE.Mesh(new THREE.TorusGeometry(0.2,0.08,8,20),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    );
    //轮胎4
	var torus4 = new THREE.Mesh(new THREE.TorusGeometry(0.2,0.08,8,20),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    );
    torus1.rotation.y = Math.PI/2;    //90degree
    torus2.rotation.y = Math.PI/2;    //90degree
    torus3.rotation.y = Math.PI/2;    //90degree
    torus4.rotation.y = Math.PI/2;    //90degree
    torus1.position.set(-0.5,-0.5,1);  // 向Z轴正方向移动1
    torus2.position.set(-0.5,-0.5,-1);
	torus3.position.set(0.5,-0.5,1);
	torus4.position.set(0.5,-0.5,-1);
    scene.add(torus1);
    scene.add(torus2);
    scene.add(torus3);
    scene.add(torus4);

	//渲染
	renderer.render(scene, camera);

}