let newImage = document.querySelector(".newImg");
let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");

let s = "cats";
let key = "sr3YmfucDXY2tWhybfwINnvqbsDSqSRw";
let errorGIF =
	"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWpmM3FkYnptZ20xbjQwOWs4d3B0cjFieGVjd3Z3bDBvYzdrc3JoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UHAYP0FxJOmFBuOiC2/giphy.gif";

function getImage(search) {
	const img = document.querySelector("img");
	fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`, {
		mode: "cors",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		})
		.catch(function (message) {
			console.error(message);
			img.src = errorGIF;
		});
}

getImage(s);
searchBtn.addEventListener("click", () => {
	s = searchInput.value;
	searchInput.value = "";
	getImage(s);
});

newImage.addEventListener("click", () => getImage(s));
