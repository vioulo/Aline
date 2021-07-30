
const ContextMenu = function (options) {
	let instance;

	function createMenu() {
		const ul = document.createElement("ul");
		ul.classList.add("custom-context-menu");
		const { menus } = options;
		if (menus && menus.length > 0) {
			for (let menu of menus) {
				const li = document.createElement("li");
				li.textContent = menu.name;
				li.onclick = menu.onClick;
				ul.appendChild(li);
			}
		}
		const body = document.querySelector("body");
		body.appendChild(ul);
		return ul;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createMenu();
			}
			return instance;
		},
	};
};

// const cMenu = ContextMenu({
// 	menus: [
// 		{
// 			name: "custom menu 1",
// 				onClick: function (e) {
// 				onsole.log("menu1 clicked");
// 			},
// 		},
// 	],
// });

function showMenu(e) {
	e.preventDefault();
	const menus = cMenu.getInstance();

	menus.style.top = `${e.clientY}px`;
	menus.style.left = `${e.clientX}px`;
	menus.classList.remove("hidden");
}

function hideMenu(event) {
	const menus = cMenu.getInstance();
	menus.classList.add("hidden");
}

document.addEventListener("contextmenu", showMenu);
document.addEventListener("click", hideMenu);