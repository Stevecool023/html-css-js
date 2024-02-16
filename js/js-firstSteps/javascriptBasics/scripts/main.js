const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/Firefox-logo.jpg") {
		myImage.setAttribute("src", "images/agrimoji.jpg");
	} else {
		myImage.setAttribute("src", "images/Firefox-logo.jpg");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Mozilla is cool, ${name}`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
};
