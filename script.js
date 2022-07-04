let buttons = document.getElementsByTagName("BUTTON");
let img = document.querySelector(".img");
let image="";
let quote="";

async function apiFun(){
	// https://catfact.ninja/fact
	// https://api.breakingbadquotes.xyz/v1/quotes
	await fetch ("https://catfact.ninja/fact?max_length=100")
	.then(res=>res.json())
	.then((data)=>{
		quote=data;
})};
async function imgApi(){
	await fetch ("https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true")
	.then(res=>res.json())
	.then(data=>{
		image = data[0].url;
		// console.log(data);
	})};

async function setImg(){
	img.style.backgroundImage=`url(${image})`
}

buttons[1].addEventListener("click",()=>{
	
	apiFun();
	console.log(quote);
	// console.log(quote[0].quote.length);

	if(quote.fact.length < 100){
		document.querySelector("h5").innerText=quote.fact;
		imgApi();
		setImg();	
	}else{
		// document.querySelector("h5").innerText= "quote length overflow";

	
	}
		
});

buttons[0].addEventListener("click",()=>{
	// navigator.clipboard.writeText(quote[0].quote);

	// console.log(image);
	// img.style.backgroundImage=url(img[0].url);

});

