const navBtn = document.querySelector('.hamburger')
const navMbl = document.querySelector('.nav-mobile')
const navItems = document.querySelectorAll('.nav__item')

navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('is-active')
	navMbl.classList.toggle('nav-mobile-active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMbl.classList.remove('nav-mobile-active')
            navBtn.classList.remove('is-active')
		})
	})
})
