function menu() {
	var x = document.getElementsByClassName("mobilMenu")[0];
	if (x.style.height === "244px") {
		x.style.animation = "0.25s menuEnd ease-out";
		x.style.display = "block";
		x.style.height = "0px";
	} else {
		x.style.animation = "0.25s menuStart ease-out";
		x.style.display = "block";
		x.style.height = "244px";
	}
}
function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 25;
		//když se zvětšuje v animaci, elementTop se mění, proto:
		if (reveals[i].getBoundingClientRect().height == 0) {
			elementTop = elementTop - (reveals[i].height / 2)
			elementVisible = 0;
		}
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			//reveals[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);