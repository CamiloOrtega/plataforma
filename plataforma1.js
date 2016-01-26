var lienzo;
var distancia=5;
var evento;
var altura=Math.floor((Math.random()*500)+1);
function recalcular(){
	altura= Math.floor((Math.random()*500)+1);

}
var puntos;

var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
	};
var prota={
	aire:false,
	atras:false,
	adelante:false,
	x:0,
	y:300,
	protaURL:"prota.png",
	saltoURL:"protasalto.png",
	adURL:"protamovad.png",
	atURL:"protamovat.png",
	protaOK:false,
	width:50,
	height: 50 
};
var fondo={
	x:0,
	y:0,
	fondoURL:"plataformafondo.png",
	fondoOk:false
};

var kunai={
	kURL:"kunai.png",
	kunaiOK:false,
	x:610,
	width:50,
	height: 20 
};


function inicio(){
//var canvas=document.getElementById("c");
lienzo = document.getElementById("ca").getContext("2d");
caja=document.getElementById("puntos");
puntos=0;

prota.imagen=new Image();
prota.imagen.src= prota.protaURL;
prota.imagen.onload=confirmarProta;

fondo.imagen=new Image();
fondo.imagen.src=fondo.fondoURL;
fondo.imagen.onload=confirmarFondo;

kunai.imagen= new Image();
kunai.imagen.src=kunai.kURL;
kunai.imagen.onload=confirmarKunai;


document.addEventListener("keydown", teclado);


setInterval(loop,0.5);


}

function confirmarKunai(){
	kunai.kunaiOK=true;
	dibujar();
}

function confirmarFondo(){
	fondo.fondoOK=true;
	dibujar();
}

function confirmarProta(){
	prota.protaOK=true;
	dibujar();

}

function dibujar(){
	if (fondo.fondoOK){
		lienzo.drawImage(fondo.imagen,0,0);
	}
	if (prota.protaOK){
	lienzo.drawImage(prota.imagen,prota.x,prota.y);
	}

	if (kunai.kunaiOK){
		lienzo.drawImage(kunai.imagen,kunai.x, altura);
	}


	}

function teclado(datos)
{

var codigo=datos.keyCode;

	if (codigo==teclas.UP)
	{
		dibujar();
	if(prota.aire == false){
		prota.aire = true;
	}
	
	}


	if (codigo==teclas.DOWN)
	{
		


	}


	if (codigo==teclas.LEFT)
	{
		dibujar();
		if(prota.atras==false){
			prota.atras=true;
		}



	}


	if (codigo==teclas.RIGHT)
	{	
	dibujar();
		if(prota.adelante==false){
			prota.adelante=true;
		}

	}


}


function loop(){
	dibujar();
	if(prota.aire && prota.y >= 200){
		prota.y -= 10; 
		prota.imagen.src=prota.saltoURL;
	}
	else if(prota.y <= 300){
		prota.y += 5;
		prota.aire = false;
		prota.imagen.src=prota.protaURL;
	}


		if (kunai.x>=0){
		kunai.x-=10;
		}
		 if (kunai.x<0){
		puntos++;
		recalcular();
		kunai.x=610;
		}



if (prota.x < kunai.x &&
   prota.x + prota.width > kunai.x &&
   prota.y < kunai.y &&
   prota.y + prota.height > kunai.y) {

    // collision detected!
alert("perdiste");
}

	//console.log(altura+":"+prota.y)
	/*if((kunai.x < prota.x) && (altura > prota.y)){
		alert('perdio');
	}*/

	if(prota.atras){
		prota.x-= 20;
		prota.imagen.src=prota.atURL;
		prota.atras=false;
		}

	if(prota.adelante){
		prota.x+= 20;
		prota.imagen.src=prota.adURL;
		prota.adelante=false;
		}
caja.innerText=puntos+ "!";
}

