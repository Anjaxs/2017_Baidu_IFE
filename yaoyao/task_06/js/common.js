function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
    var sHeight=document.body.scrollHeight;
	
    var oMask=document.createElement("div");
    oMask.id="mask";
        
    //设置遮罩层的宽度和高度，使页面被完全遮罩。    
	oMask.style.height=sHeight+"px";
    oMask.style.width=sWidth+"px";
	    
    //在页面里插入创建的遮罩层
    document.body.appendChild(oMask);
         
    //获取页面的可视区域高度和宽度
	var wHeight=document.body.clientHeight;
    var wWidth=document.body.clientWidth;
	
	//获取模态框的宽和高
	var oModal=document.getElementById('modal');
	oModal.style.display = "block";
    var dHeight=oModal.offsetHeight;
    var dWidth=oModal.offsetWidth;
    oModal.style.top=(wHeight-dHeight)/2+"px";
    oModal.style.left=(wWidth-dWidth)/2+"px";
    //点击关闭按钮
	oClose=oModal.getElementsByClassName('close');
	//点击模态框以外的区域也可以关闭模态框
    oClose[0].onclick = oClose[1].onclick =oMask.onclick=function (){
        document.body.removeChild(mask);
        oModal.style.display = "none"
    }	
	
}		
					
//加载后，点击登录按钮后，弹出遮罩和登录框
window.onload=function (){
	var oBth=document.getElementById("modal-btn");
	oBth.onclick=function (){
	   openNew();
	   return false;
	}
}
   