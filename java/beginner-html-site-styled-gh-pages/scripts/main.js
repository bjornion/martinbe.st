// JavaScript Document














/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';
var myName = 'Martin';
var myLname = 'Bergstrand';
var author = document.querySelector('h2');
author.textContent = myName+' '+myLname;

if(myName === 'Martin'){
	alert('Korrekt');
}else{
	alert('Fel');
}

function multiply(num1, num2){
	var sum = num1 * num2;
	return sum;
}

author.textContent = multiply(10, 50);

document.querySelector('html').onclick = function(){
	alert('stap clikcing me');
};

var myImage = document.querySelector('.imageee');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src', 'images/hamster.jpg');
	}else if (mySrc === 'images/hamster.jpg'){
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}else{
		alert('Funka inte');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Type name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Coolstary mete ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Cooler story mate ' + storedName;
}

myButton.onclick = function(){
	setUserName();
};