let coursesContainer = document.querySelector(".courses");
for (let i = 0; i < 3; i++) {
	coursesContainer.innerHTML += `<div><img src="./assets/image5.png">
	<h5>The 1% course</h5>
	<p class='community-text'>Now, I'm on a mission to help you get to the
RICHEST 1% - one educational finance
content at a time.</p>
<button>Buy the course @ ₹3,999</button>
	</div>`;
}

let iconsArr = [
	"./assets/image6.png",
	"./assets/image7.png",
	"./assets/image6.png",
];

let consultationContainer = document.querySelector(".consultations");
for (let i = 0; i < 3; i++) {
	consultationContainer.innerHTML += `<div class='consultaion-container'>
	 <img src=${iconsArr[i]}>
	 <h5>SCO vs HEA Dream11 Team</h5>
	 <h5>Prediction | Dream11</h5>
	 <div>
	 <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
</svg> <p>12 Slots left</p></div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> <p>15 min</p></div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> <p>99/slot</p></div>
<button>View Details</button>
</div>
	 </div>`;
}

let testimonialsContainer = document.querySelector(".testimonials");
for (let i = 0; i < 3; i++) {
	testimonialsContainer.innerHTML += `<div>
	<p>Now, I'm on a mission to help you get
to the RICHEST 1% - one educational
finance content at a time. Now, I'm on
a mission to help you get to the
RICHEST 1% - one educational finance

content at a time.</p>
<img src="./assets/image8.png">
<h5>Rustom Paji</h5>
<p>Hotel owner</p>
	</div>`;
}

