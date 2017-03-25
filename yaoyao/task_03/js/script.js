/*data*/
var inSchool = document.getElementById("in-school");
var outSchool = document.getElementById("out-school");

var radioBox = document.getElementsByName("school");
var areaSelect = document.getElementById("area");
var schoolSelect = document.getElementById("school");

/*event*/
areaSelect.addEventListener('click', selectClick);

radioBox.forEach(function(x) {
	x.addEventListener('click', radioClick);
});

/*选择下拉框联动*/
function selectClick () {	
	var val = this.options[this.selectedIndex].value;
	var schoolData = {
		"beijing": [["beida", "北京大学"],["qinghua","清华大学"]],
		"guangzhou": [["sysu", "中山大学"],["huagong","华南理工大学"]]
	}
	
	schoolSelect.innerHTML = "";
	schoolData[val].forEach(function(x) {
		console.log(x);
		var opt = document.createElement("option");
		opt.value = x[0];
		opt.innerHTML = x[1];
		schoolSelect.appendChild(opt);
	});
}

function radioClick () {
	var checkedRadioValue = "";
	//如果是当前的radio被选择
	if(this.checked == true) {
		//记录选择的radio的value
		checkedRadioValue = this.value;

		if(checkedRadioValue == "in-school") {	//隐藏和显示开关
			inSchool.style.display = "block";
			outSchool.style.display = "none";
		}
		else {
			inSchool.style.display = "none";
			outSchool.style.display = "block";
		}
	}	
}
