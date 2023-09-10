var burger = document.querySelector(".burger-wrapper");
var listItems = document.querySelectorAll(".list-item");

burger.addEventListener('click', function() {

	for(let i = 0; i < listItems.length; i++) {
		listItems[i].classList.toggle("visible");
	}

})