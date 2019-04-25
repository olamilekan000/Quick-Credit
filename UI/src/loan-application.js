import'../styles/index.css';

const btn = document.querySelectorAll('button#profile')
btn.forEach( function(element) {
	element.onclick = (e) => {
		e.preventDefault()
		// testing routing
		window.location = 'loan-profile.html'
	}
});
