var item1
var item2 
var item3 
var item4
var elementocolor


function CargarDatos(){
item1 = document.getElementById("list-item-1");
item2 = document.getElementById("list-item-2");
item3 = document.getElementById("list-item-3");
item4 = document.getElementById("list-item-4");
elementocolor = document.getElementById("color")}

 function fun1(){
CargarDatos()
item1.style.display = "contents"
item2.style.display = "none"
item3.style.display = "none"
item4.style.display = "none"
elementocolor.animate([{top : "-900px"},
	                   {top : 0 }],
	                   {duration : 500})
}

function fun2(){
CargarDatos()
item1.style.display = "none"
item2.style.display = "contents"
item3.style.display = "none"
item4.style.display = "none"
elementocolor.animate([{top : "-900px"},
	                   {top : 0 }],
	                   {duration : 500})
}

function fun3(){
CargarDatos()
item1.style.display = "none"
item2.style.display = "none"
item3.style.display = "contents"
item4.style.display = "none"
elementocolor.animate([{top : "-900px"},
	                   {top : 0 }],
	                   {duration : 500})
}

function fun4(){
CargarDatos()
item1.style.display = "none"
item2.style.display = "none"
item3.style.display = "none"
item4.style.display = "contents"
elementocolor.animate([{top : "-900px"},
	                   {top : 0 }],
	                   {duration : 500})
} 

