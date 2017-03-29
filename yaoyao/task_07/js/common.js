var table = document.getElementsByClassName('table-sort')[0];
var thead = table.children[0];
var tbody = table.children[1];
var sortItem = thead.getElementsByClassName('sort-item');

for (var i = 0; i < sortItem.length; i++) {
	var i1 = document.createElement('i');
	i1.className = "sort-arrow asc";
	var i2 = document.createElement('i');
	i2.className = "sort-arrow desc";
	sortItem[i].appendChild(i1);
	sortItem[i].appendChild(i2);

	i1.onclick = function () {
		sort('asc', this);
	}

	i2.onclick = function () {
		sort('desc', this);
	}
}

//获取子元素c 在 父元素p中排第几个 
function getIndex(p, c) {
	for (var i = 0; i < p.children.length; i++) {
		if (p.children[i] == c) {
			return i;
		}
	}
}

function swap(x, y) {
	var tmp = x.innerHTML;
	x.innerHTML = y.innerHTML;
	y.innerHTML = tmp;
}

function sort(key, c) {
	var index = getIndex(thead.children[0], c.parentNode);
	var tr = tbody.children;
	for (var i = 1; i < tr.length; i++) {
		for (var j = 0; j < tr.length - i; j++) {
			var x = parseInt(tr[j].children[index].innerHTML);
			var y = parseInt(tr[j+1].children[index].innerHTML);
			if (key == 'asc') {
				if ( x > y ) {
					swap(tr[j], tr[j+1]);
				}
			} else {
				if ( x < y ) {
					swap(tr[j], tr[j+1]);
				}
			}
		}	
	}
}


