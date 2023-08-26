let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
let loader = document.getElementById("loader");
xhr.addEventListener("readystatechange", () => {
	if(xhr.readyState === xhr.DONE){
		loader.classList.remove("loader_active");
		let valute = JSON.parse(xhr.responseText).response.Valute;
		for(let i in valute){
			let item = document.createElement("div");
			item.className = ("item");
			item.innerHTML = `<div class="item__code"> ${valute[i].CharCode} </div> <div class="item__value"> ${valute[i].Value} </div>
                <div class="item__currency">
                    руб.
                </div>`;
            document.getElementById("items").append(item);
		};	
	};
});

