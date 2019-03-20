function resetSignMethod1(){
	welcome='';
	sign='';
	calcsign();
	setSign();
}

function resetSignMethod2(event){
	//creating an array of variables;
	
	var arrayElements = ['greeting','userSign','tiles','subTotal','shipping','grandTotal']; 
	for (i=0;i<arrayElements.length;i++)
	{
		console.log(i);
		setTextContentById(arrayElements[i],'');
		
	}
	event.preventDefault();
}

// Create variables for the welcome message
var greeting = '[not initialized]', 
	name = '[not initialized]', 
	message = '[not initialized]' ,
	sign = '[not initialized]';	
	
var welcome , tiles ,subTotal, shipping,grandTotal;
	

function initiateVars() {
	greeting = 'Howdy!'; 
	name= 'Prachi';
	message='Check your order!!';
	sign='styles';
	welcome= greeting + ' ' + name  + ' '+ message;
	calcsign();
	}

function calcsign(){
	 tiles = sign.length;
	 subTotal = tiles * 5, 
	 shipping = 7;
	 grandTotal = subTotal + shipping;
}

function setTextContentById(getId, setMsg) {
// Get the element that has an id of greeting
var el = document.getElementById(getId);
// Replace the content of that element with the personalized welcome message
el.textContent = setMsg;
}

function setSign(){
	
	setTextContentById('greeting',welcome);
	setTextContentById('userSign',sign);
	setTextContentById('tiles',tiles);
	setTextContentById('subTotal','$' + subTotal);
	setTextContentById('shipping','$' + shipping);
	setTextContentById('grandTotal','$' + grandTotal);};
	
initiateVars();
setSign();
//resetSignMethod1();
//resetSignMethod2();	

var el= document.getElementById('resetBtn');
el.addEventListener('click',resetSignMethod2,false);	


	






