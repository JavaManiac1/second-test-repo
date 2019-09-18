
function myFunction() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
  x.innerHTML= "Rakieta FALCON wystartowała";
}

function landRocket(){
	var x = document.getElementById("demo");
	x.style.fontsize = "20";
	x.style.color = "green";
	x.innerHTML = "Rakieta Wylądowała";
}

function addBorder(){
	var container = document.getElementsByClassName('container');
    var divs = container[0].getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.border = "thin dotted green";
	}
    
}

	

/*function addBorder(){
	var nodes = document.getElementById('container').childNodes;
	  for var(i=0; i<nodes.length; i++){
         nodes[i].style.color = "red";
         nodes[i].style.border = "dotted red";
	  }
  /* elemw =  document.getElementsByClassName("container");
	elemw.innerHTML = "działa";
	elemw.style.border = "dotted red";
	elemw.style.backgroundColor = "red" */ 
