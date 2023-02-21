console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form successfully submitted.");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("cat").addEventListener("mouseover", alertCompl);

function alertCompl() {
  alert("You have purr-ty eyes!");
}