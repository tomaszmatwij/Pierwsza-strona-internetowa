const footerYear = document.querySelector('.footer__year');
const date = new Date();

const year = () => {
	footerYear.textContent = `${date.getFullYear()}`;
};

year();
