function init() {
	//渲染器
	var renderer = new THREE.WebGLRenderer({
	    canvas: document.getElementById('mainCanvas'),
	    antialias: true,   //  开启消除锯齿,默认false
	    precision: "highp"   // 渲染精度  highp/mediump/lowp
	});
	renderer.setClearColor(0x777777); //设置画布颜色
    renderer.shadowMapEnabled = true; //设置阴影
	//场景
	var scene = new THREE.Scene();
	
	//照相机
	var camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
	//设置相机摆放位置
    camera.position.set(-3, 3, 4);
    //设置相机看向的位置
    camera.lookAt(new THREE.Vector3(0,0,0));
	//照相机也需要被添加到场景中。
    scene.add(camera);
	
    //创建一个平面
    var plane = new THREE.Mesh(new THREE.PlaneGeometry( 5, 6),
        new THREE.MeshPhongMaterial( {
            color: 0x9aad74
        })
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.75;
    plane.receiveShadow = true;
    scene.add(plane);


	// 创建一个长方体
	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 3),
        new THREE.MeshPhongMaterial({
            color: 0xaaaaaa,
        })
    );
	cube.castShadow = true; //对于光源以及所有要产生阴影的物体调用
	scene.add(cube);

	//轮胎1
	var torus1 = new THREE.Mesh(new THREE.TorusGeometry(0.2,0.08,8,20),
        new THREE.MeshPhongMaterial({
            color: 0xaaaaaa
        })
    );
    torus1.castShadow = true;
    torus1.rotation.y = Math.PI/2;    //90degree
    var torus2 = torus1.clone();
    var torus3 = torus1.clone();
    var torus4 = torus1.clone();
    
   
    torus1.position.set(-0.57,-0.5,1);  // 向Z轴正方向移动1
    torus2.position.set(-0.57,-0.5,-1);
	torus3.position.set(0.57,-0.5,1);
	torus4.position.set(0.57,-0.5,-1);
    scene.add(torus1).add(torus2).add(torus3).add(torus4);
    

    //加入光源
    var light = new THREE.SpotLight(0xffffff, 2, 200, Math.PI / 6, 25);
    light.position.set(-3, 2, 2);
    light.target = cube;
    light.castShadow = true;

    light.shadowCameraNear = 1;
    light.shadowCameraFar = 20;
    light.shadowCameraFov = 30;
    light.shadowCameraVisible = true;

    light.shadowMapWidth = 1024;
    light.shadowMapHeight = 1024;
    light.shadowDarkness = 0.2;

    scene.add(light);

    


	//渲染
   
	renderer.render(scene, camera);

}