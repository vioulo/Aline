
function createMenu(menus) {

	let ul = document.createElement("ul");
	ul.classList.add("custom-context-menu");

	if (menus && menus.length > 0) {
		for (let menu of menus) {
			let li = document.createElement("li");
			li.textContent = menu.name;
			li.onclick = menu.onClick;
			ul.appendChild(li);
		}
	}
	let body = document.querySelector("body");
	body.appendChild(ul);
	return ul;
}

function showMenu(e) {

	hideMenu();
	e.preventDefault();

	let menus = [
			{
				name: "custom menu 1",
				onClick: function (e) {
					console.log("menu1 clicked");
				},
			},
			{
				name: "custom menu 2",
				onClick: function (e) {
					console.log("menu2 clicked");
				},
			},
			{
				name: "custom menu 3",
				onClick: function (e) {
					console.log("menu3 clicked");
				},
			},
		];

	let mblk = createMenu(menus);

	mblk.style.top = `${e.clientY}px`;
	mblk.style.left = `${e.clientX}px`;
	mblk.classList.remove("hidden");
}

function hideMenu() {

	let menu = document.querySelector(".custom-context-menu");
	if (menu) menu.remove();
}

document.addEventListener("contextmenu", showMenu);
document.addEventListener("click", hideMenu);