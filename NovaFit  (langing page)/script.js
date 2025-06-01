// Модальное окно для скачивания приложения
const downloadBtn = document.querySelector('.hero-btn')
const downloadModal = document.getElementById('modal')
const downloadCloseBtn = document.getElementById('closeModal')

const openDownloadModal = () => {
	downloadModal.classList.remove('hidden')
}

const closeDownloadModal = e => {
	if (e.target.id === 'modal' || e.target.id === 'closeModal') {
		downloadModal.classList.add('hidden')
	}
}

downloadBtn.addEventListener('click', openDownloadModal)
downloadModal.addEventListener('click', closeDownloadModal)
downloadCloseBtn.addEventListener('click', closeDownloadModal)

//Модальное окно  формы обратной связи
const openContactModalBtn = document.getElementById('openContactModal')
const contactModal = document.getElementById('contactModal')
const closeContactModalBtn = document.getElementById('closeContactModal')
const contactModalOverlay = document.getElementById('contactModalOverlay')

openContactModalBtn.addEventListener('click', () => {
	contactModal.classList.remove('hidden')
})

closeContactModalBtn.addEventListener('click', () => {
	contactModal.classList.add('hidden')
})

contactModalOverlay.addEventListener('click', () => {
	contactModal.classList.add('hidden')
})

// Табы
const tabButtons = document.querySelectorAll('.tab-btn')
const tabPanels = document.querySelectorAll('.tab-panel')

tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		tabButtons.forEach(btn => btn.classList.remove('active'))
		button.classList.add('active')

		const tabId = button.dataset.tab
		tabPanels.forEach(panel => {
			panel.classList.toggle('active', panel.id === tabId)
		})
	})
})

// Слайдер отзывов
const reviewsWrapper = document.querySelector('.reviews-wrapper')
const reviewCards = document.querySelectorAll('.review-card')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentIndex = 0

function updateSlider() {
	reviewsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`
	reviewCards.forEach((card, index) => {
		card.classList.toggle('active', index === currentIndex)
	})
}

prevBtn.addEventListener('click', () => {
	currentIndex = currentIndex === 0 ? reviewCards.length - 1 : currentIndex - 1
	updateSlider()
})

nextBtn.addEventListener('click', () => {
	currentIndex = currentIndex === reviewCards.length - 1 ? 0 : currentIndex + 1
	updateSlider()
})

setInterval(() => {
	currentIndex = currentIndex === reviewCards.length - 1 ? 0 : currentIndex + 1
	updateSlider()
}, 6000)

updateSlider()

// Аккордеон

const openFAQ = document.querySelectorAll('.faq-question')
const itemFAQ = document.querySelectorAll('.faq-item')

openFAQ.forEach(button => {
	button.addEventListener('click', () => {
		const item = button.parentElement
		item.classList.toggle('active')

		// Закрывать другие
		itemFAQ.forEach(otherItem => {
			if (otherItem !== item) {
				otherItem.classList.remove('active')
			}
		})
	})
})

// Бургер Меню

const burger = document.getElementById('burger-menu')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	navLinks.classList.toggle('active')
})
