import'../styles/index.css';
import './validation.js'

const signInButton = document.querySelector('button#Sign-In')

signInButton.addEventListener('click', (event) => {
	event.preventDefault()
	window.location = 'dashboard.html'
})
