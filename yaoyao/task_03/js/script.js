init();

function selectClick () {
	var select1 = document.getElementById("area");
	var select2 = document.getElementById("school");
	var value = select1.options[select1.selectedIndex].value;
	var school = {
		beijing: [["beida", "北京大学"],["qinghua","清华大学"]],
		guangzhou: [["sysu", "中山大学"],["huagong","华南理工大学"]]
	}
	
	select2.innerHTML = "";
	school[value].forEach(function(x) {
		console.log(x);
		var option = document.createElement("option");
		option.value = x[0];
		option.innerHTML = x[1];
		select2.appendChild(option);
	});
}

function radioClick () {
	var inSchool = document.getElementById("in-school");
	var outSchool = document.getElementById("out-school");
	var radio = document.getElementsByName("school");
	var checked = "";
	radio.forEach(function(x) {
		if(x.checked == true) {
			checked = x.value;
		}
	});
	if(checked == "in-school") {
		inSchool.style.display = "block";
		outSchool.style.display = "none";
	}
	else {
		inSchool.style.display = "none";
		outSchool.style.display = "block";
	}
}

function init () {
	var radio = document.getElementsByName("school");
	document.getElementById("out-school").style.display = "none";
	document.getElementById("area").addEventListener('click', selectClick);
	radio.forEach(function(x) {
		x.addEventListener('click', radioClick)
	});
}
