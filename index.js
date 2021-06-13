let calculateParallelogram = function () {
	let inputA = document.querySelector('[name=prlA]'); 			
	let a = inputA.value;
	let inputB = document.querySelector('[name=prlB]'); 			
	let b = inputB.value;
	let inputAngle = document.querySelector('[name=prlAngle]');		
	let angle = inputAngle.value;
	let outputArea = document.querySelector('#prlArea');			
	let area = null;
	let outputH = document.querySelector('#prlH');					
	let h = null;
	area = a * b * Math.sin(angle * (Math.PI/180));
	h = area / b;
	outputArea.innerHTML = Math.floor(area);
	outputH.innerHTML = Math.floor(h);
	let container = document.querySelector('.block.parallelogram > .object > div');
	container.style.height = a + "mm";
	container.style.width = b + "mm";
	container.style.transform = "skew(-" + angle + "deg)";
}
let calculateCircle = function () {
	let inputR = document.querySelector('[name=crclR]'); 			
	let r = inputR.value;
	let outputArea = document.querySelector('#crclArea');			
	let area = null;
	let outputL = document.querySelector('#crclL');					
	let l = null;
	area = Math.PI * r * r;
	l = 2 * Math.PI * r;
	outputArea.innerHTML = Math.floor(area);
	outputL.innerHTML = Math.floor(l);
	let container = document.querySelector('.block.circle > .object > div');
	container.style.height = container.style.width = r * 2 + "mm";
	container.style.borderRadius = r * 4 + "mm";
} 
let calculateElips= function () {
	let inputHR = document.querySelector('[name=elipsHR]'); 			
	let hR = inputHR.value;
	let inputVR = document.querySelector('[name=elipsVR]'); 			
	let vR = inputVR.value;
	let outputArea = document.querySelector('#elipsArea');			
	let area = null;
	let outputL = document.querySelector('#elipsL');					
	let l = null;
	area = Math.PI * hR * vR;
	l = Math.PI * (hR + vR);
	outputArea.innerHTML = Math.floor(area);
	outputL.innerHTML = Math.floor(l);
	let container = document.querySelector('.block.elips > .object > div');
	container.style.width = hR * 2 + "mm";
	container.style.height = vR * 2 + "mm";
	container.style.borderRadius = (hR * 4) + "mm / " + (vR * 4.5) + "mm";
}
let calculateSquare = function () {
	let inputA = document.querySelector('[name=sqrA]');
	let a = inputA.value;
	let outputArea = document.querySelector('#sqrArea');			
	let area = null;
	let outputD = document.querySelector('#sqrD');					
	let d = null;
	area = a * a;
	d = Math.sqrt(2 * area);
	outputArea.innerHTML = Math.floor(area);
	outputD.innerHTML = Math.floor(d);
	let container = document.querySelector('.block.square > .object > div');
	container.style.height = a + "mm";
	container.style.width = a + "mm";
}
let calculateRectangle = function () {
	let inputA = document.querySelector('[name=rctA]'); 			
	let a = inputA.value;
	let inputB = document.querySelector('[name=rctB]'); 			
	let b = inputB.value;
	let outputArea = document.querySelector('#rctArea');			
	let area = null;
	let outputD = document.querySelector('#rctD');					
	let d = null;
	area = a * b;
	d = Math.sqrt(a*a + b*b);
	outputArea.innerHTML = Math.floor(area);
	outputD.innerHTML = Math.floor(d);
	let container = document.querySelector('.block.rectangle > .object > div');
	container.style.width = a + "mm";
	container.style.height = b + "mm";
}
let calculateTriangle = function () {
	let inputA = document.querySelector('[name=trnglA]'); 			
	let a = inputA.value;
	let inputB = document.querySelector('[name=trnglB]'); 			
	let b = inputB.value;
	let outputC = document.querySelector('#trnglC');				
	let c = null;
	let outputH = document.querySelector('#trnglH');				
	let h = null;
	let outputArea = document.querySelector('#trnglArea');			
	let area = null;
	let outputAngleA = document.querySelector('#trnglAngleA');		
	let angleA = null;
	let outputAngleB = document.querySelector('#trnglAngleB');		
	let angleB = null;
	area = a * b / 2;
	c = Math.sqrt(a*a + b*b);
	h = a * b / c;
	angleA = Math.asin(a / c) * (180/Math.PI);
	angleB = Math.asin(b / c) * (180/Math.PI);
	outputC.innerHTML = Math.floor(c);
	outputH.innerHTML = Math.floor(h);
	outputArea.innerHTML = Math.floor(area);
	outputAngleA.innerHTML = Math.floor(angleA);
	outputAngleB.innerHTML = Math.floor(angleB);
	let container = document.querySelector('.block.triangle > .object > div');
	container.style.borderBottomWidth = a + "mm";
	container.style.borderRightWidth = b + "mm";
}
let calc = function () {
	calculateParallelogram();
	calculateCircle();
	calculateOval();
	calculateSquare();
	calculateRectangle();
	calculateTriangle();
}
calc();