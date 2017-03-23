var formName = document.getElementById('name');
var formPwd = document.getElementById('pwd');
var formRepwd = document.getElementById('repwd');
var formEmail = document.getElementById('email');
var formPhone = document.getElementById('phone');
var submitBtn = document.getElementById('submit-btn');

/*名称验证*/
formName.onfocus = function () {
	//聚焦，出现规则提示
	this.nextElementSibling.style.visibility = "visible";
	changeTip(this, "必填，长度为4-16个字符", "#aaa");
	
	//失焦，显示验证结果
	this.onblur = function () {
		var len = this.value.replace(/[^x00-xff]/g,'aa').length;
		
		if (len == 0) {
			changeTip(this, "姓名不能为空","red");
		} else if (len < 4 || len > 16) {
			changeTip(this, "姓名格式不正确", "red");
		} else {
			changeTip(this, "姓名格式正确", "green");
		}
	}
}

/*密码验证*/
formPwd.onfocus = function () {
	//聚焦，出现规则提示
	this.nextElementSibling.style.visibility = "visible";
	changeTip(this, "必填，只能输入6-20个字母、数字、下划线", "#aaa");
	
	//失焦，显示验证结果
	this.onblur = function () {
		var pattern=/^(\w){6,20}$/;  
		if (this.value.length == 0) {
			changeTip(this, "密码不能为空","red");
		} else if (!pattern.exec(this.value)) {
			changeTip(this, "密码格式错误","red");
		} else {
			changeTip(this, "密码可用", "green");
		}
	}
}

/*确认密码验证*/
formRepwd.onfocus = function () {
	//聚焦，出现规则提示
	this.nextElementSibling.style.visibility = "visible";
	changeTip(this, "再次输入相同密码", "#aaa");
	
	//失焦，显示验证结果
	this.onblur = function () {
		if (this.value.length == 0) {
			changeTip(this, "密码不能为空","red");
		} else if (formPwd.value != this.value) {
			changeTip(this, "密码输入不一致","red");
		} else {
			changeTip(this, "密码输入一致", "green");
		}
	}
}

/*邮箱验证*/
formEmail.onfocus = function () {
	//聚焦，出现规则提示
	this.nextElementSibling.style.visibility = "visible";
	changeTip(this, "请输入正确的邮箱地址", "#aaa");
	
	//失焦，显示验证结果
	this.onblur = function () {
		var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/; 
		if (this.value.length == 0) {
			changeTip(this, "邮箱不能为空","red");
		} else if (!pattern.exec(this.value)) {
			changeTip(this, "邮箱格式错误","red");
		} else {
			changeTip(this, "邮箱可用", "green");
		}	
	}
}

/*手机验证*/
formPhone.onfocus = function () {
	//聚焦，出现规则提示
	this.nextElementSibling.style.visibility = "visible";
	changeTip(this, "请输入正确的手机号码", "#aaa");
	
	//失焦，显示验证结果
	this.onblur = function () {
		var pattern = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
		if (this.value.length == 0) {
			changeTip(this, "手机号码不能为空","red");
		} else if (!pattern.exec(this.value)) {
			changeTip(this, "手机号码格式错误","red");
		} else {
			changeTip(this, "手机号码可用", "green");
		}	
	}
}

submitBtn.onclick = function () {
	var tip = document.getElementsByClassName("alert");

	for (var i = 0; i < tip.length; i++) {
		console.log(tip[i].style.color);
		if (tip[i].style.color == "red" || tip[i].style.color == "") {
			alert("提交失败");
			return false;
		}
	}
	alert("提交成功");
	return false;
}


/*改变提示的样式*/
function changeTip(input, msg, color) {
	var alert = input.nextElementSibling;
	input.style.borderColor = color;
	alert.innerHTML = msg;
	alert.style.color = color;
}