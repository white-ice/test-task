// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Clock
// function clock() {
// 	const hours = document.getElementById('hours')
// 	const minutes = document.getElementById('minutes')
// 	const seconds = document.getElementById('seconds')

// 	let h = new Date().getHours();
// 	let m = new Date().getMinutes();
// 	let s = new Date().getSeconds();

// 	h = h < 10 ? "0" + h : h;
// 	m = m < 10 ? "0" + m : m;
// 	s = s < 10 ? "0" + s : s;

// 	hours.innerHTML = h;
// 	minutes.innerHTML = m;
// 	seconds.innerHTML = s;
// }

// const interval = setInterval(clock, 1000);

export function toggleSidebar() {
	if (document.querySelector('.burger-btn')) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.burger-btn')) {
				e.target.closest('.burger-btn').classList.toggle('active');
				document.querySelector('body').classList.toggle('sidebar__show')
			}
		});
	}
}