let newImage = document.querySelector(".newImg");
let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");

let s = "cats";
let key = "sr3YmfucDXY2tWhybfwINnvqbsDSqSRw";
let errorGIF =
	"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWpmM3FkYnptZ20xbjQwOWs4d3B0cjFieGVjd3Z3bDBvYzdrc3JoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UHAYP0FxJOmFBuOiC2/giphy.gif";

async function getImage(search) {
	const img = document.querySelector("img");
	try {
		img.style.opacity = "0.5";
		let image = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`,
			{ mode: "cors" }
		);
		let response = await image.json();
		img.src = await response.data.images.original.url;
		img.style.opacity = "1";
	} catch (e) {
		console.log(e);
		img.src = errorGIF;
	}
}

getImage(s);
searchBtn.addEventListener("click", () => {
	s = searchInput.value;
	searchInput.value = "";
	getImage(s);
});

newImage.addEventListener("click", () => getImage(s));
