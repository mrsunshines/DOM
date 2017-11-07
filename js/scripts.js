var buttonContentList = document.getElementsByClassName('button');
console.log(buttonContentList);
var x = buttonContentList.length;
console.log(x);
for (var i = 0; i < x; i++) {
	var y = document.getElementsByTagName("BUTTON")[i].textContent;
	alert(y);
}