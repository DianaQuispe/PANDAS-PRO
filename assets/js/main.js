	var imagenesP = document.getElementById('imagenesP');
	var panditas = ["imagenes/panda.jpg", "imagenes/panda1.jpg","imagenes/panda2.jpg","imagenes/panda3.jpg"];
for(var i =0; i<panditas.length; i++) {
	var nuevoD = document.createElement("div");	
	nuevoD.setAttribute("class", "DdePanda")
	var crearIM = document.createElement("img");
	crearIM.setAttribute("src",panditas[i])
	crearIM.setAttribute("class", "pandas")
	var crearH1 = document.createElement("span");
	crearH1.setAttribute("class", "X");
	crearH1.setAttribute("onclick", 'borrar()');
	crearH1.style.cursor="pointer";
	var texto = document.createTextNode("X");
	crearH1.appendChild(texto);
	crearH1.setAttribute("id","X")
	
	nuevoD.appendChild(crearH1);
	nuevoD.appendChild(crearIM);
	//imagenesP.insertBefore(crearH1, imagenesP.childNodes[i]);
	//crearIM.appendChild(crearH1);
	//crearIM.childNodes[i].nextSibling;
	imagenesP.appendChild(nuevoD);
}	

function borrar() {
alert("sr");	
}

