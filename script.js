//your code here
const image1 = document.getElementById("div1");
const image2 = document.getElementById("div2");
image1.addEventListener("dragover", (event) => {
	event.preventDefault();
});


image1.addEventListener("drop", () => {
	image1.appendChild(image2);
	
});